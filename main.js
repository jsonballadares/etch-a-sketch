const grid = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click',handleResetClick);
window.addEventListener("load", initGrid);



function handleMouseOver(event){
    randomBackgroundColor(event);
}

function randomBackgroundColor(event){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function handleResetClick(event){
    let gridSize;
    do{
        gridSize = prompt("how many squares per side to make the new grid?");
    }while(gridSize < 1 || gridSize > 100 || Number.isNaN(gridSize));
    clearGrid();
    setGridSize(gridSize);
    fillGrid(gridSize);
}

function initGrid(){
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList = "grid-element";
      div.addEventListener("mouseover", randomBackgroundColor);
      grid.appendChild(div);
    }
}

function clearGrid() {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
      grid.removeChild(element);
    });
}
