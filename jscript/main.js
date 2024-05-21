const box = document.querySelector(".box");
const boxTwo = document.querySelector(".box2");
const boxThree = document.querySelector(".box3");
const card = document.querySelector(".card");
const cardTwo = document.querySelector(".card2");
const cardThree = document.querySelector(".card3");

box.onclick = function(){
  card.classList.toggle('cardActive');
}
boxTwo.onclick = function(){
  cardTwo.classList.toggle('cardActive');
}
boxThree.onclick = function(){
  cardThree.classList.toggle('cardActive');
}

// Function to toggle dark mode
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// Event listener for the vector.png image click
// Place this code at the appropriate place in your JavaScript file or script tag

// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Select the vector image within the #hero element with the .dark class
  var vectorImage = document.querySelector("#nav .dark img");
  if (vectorImage) {
    // Attach the event listener to the vector image
    vectorImage.addEventListener("click", toggleDarkMode);
  }
});