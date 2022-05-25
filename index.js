let nbStar = -1;

document.querySelectorAll(".btn-rating").forEach(element => {
    element.addEventListener("click",(event) =>{
        nbStar = event.target.textContent;
    })
});


document.querySelector("#submit").addEventListener("click" , ()=>{
    if(nbStar >= 0){
        document.querySelector("#rating").style.display = "none";
        document.querySelector("#thank-you").style.display = "block";
        document.querySelector("#nb-stars").textContent = nbStar;
    }
})