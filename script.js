let mode_btn = document.getElementById("mode_btn");
let siteTitle = document.getElementsByTagName("h3");
let nav = document.querySelector(".nav");
let body = document.querySelector(".container");
let tag = document.getElementById("mode-indicator");
let para = document.getElementsByTagName("p");

let mode = 0;

function day(){
    mode = 0;
    nav.classList.remove("night");
    nav.classList.add("day");
    body.classList.remove("night");
    body.classList.add("day");
    mode_btn.classList.remove("fa-sun");
    mode_btn.classList.add("fa-moon");
    tag.innerText = "Day Mode";
}

function night(){
    mode = 1;
    nav.classList.remove("day");
    nav.classList.add("night");
    body.classList.remove("day");
    body.classList.add("night");
    mode_btn.classList.remove("fa-moon");
    mode_btn.classList.add("fa-sun");
    tag.innerText = "Night Mode";
}

mode_btn.addEventListener('click',()=>{
    
    if(mode == 0){
        night();
    }else{
        day();
    }

})