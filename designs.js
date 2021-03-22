// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const sizePicker = document.querySelector('#sizePicker');

const pixelCanvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, create a canvas (grid)
sizePicker.addEventListener('submit', function(event) {
    makeGrid();
    // Prevents the page to be reloaded after the grid is made
    event.preventDefault();
});


// Color the selected cell with the currently picked color
var colorCell = function(event) {
    if (event.target.nodeName.toLowerCase() === 'td') {
        event.target.style.backgroundColor = colorPicker.value;
    }
};


function makeGrid() {
    // If there was already a canvas, delete everything
    if (pixelCanvas.rows.length > 0) {
        pixelCanvas.removeEventListener('click', colorCell);

        // Directly replacing the HTML was faster than loooping..
        pixelCanvas.innerHTML = '';
    }
    var inputHeight = document.querySelector('#inputHeight').value;
    var inputWidth = document.querySelector('#inputWidth').value;

    // Create a row
    for (var height = 0; height < inputHeight; height++) {
        let row = pixelCanvas.insertRow();

        // Create the cells for each row
        for (var width = 0; width < inputWidth; width++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        pixelCanvas.appendChild(row);
    }

    pixelCanvas.addEventListener('click', colorCell);
}