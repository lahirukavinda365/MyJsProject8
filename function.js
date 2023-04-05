const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");
const trailer = document.querySelector(".trailer");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailer.classList.remove("active");
});

closeEl.addEventListener("click", () => {
    trailer.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});






























