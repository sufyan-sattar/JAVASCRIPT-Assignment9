function alertBox() {
    alert("Please Click ok to Continue")
}

function alertBuying() {
    alert("Thanks for Purchasing a Phone from us.")
}

function aukatKeBhar() {
    alert("Wah Ustad! Kharid liya Zabrdst .")
}

function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('tablee').deleteRow(i);
}

function changeImage() {
    document.getElementById("myImage").src = "https://i.pinimg.com/originals/3d/4c/8b/3d4c8b28cc9c7bf8e80185a9d2af9fd1.jpg";
}

function resetImage() {
    document.getElementById("myImage").src = "https://i.pinimg.com/736x/07/f0/10/07f01098c54793f1e1e38881a257ead9.jpg";
}

let counterValue = 0;

function updateCounter() {
    document.getElementById("counter").innerText = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    if (counterValue > 0){
    counterValue--;
    updateCounter();
}
}