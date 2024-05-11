// Slide Menu Bar 

let slideMenu = document.querySelector(".slide-menu");
let slideButton = document.querySelector(".slide-button");
let closeBtn = document.getElementById("closeBtn");

slideButton.addEventListener("click",()=>{
    slideMenu.style.display="block";
})
closeBtn.addEventListener("click",()=>{
    slideMenu.style.display="none";
})
