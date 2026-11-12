const demo = document.querySelector(".demo");
const toggle = document.querySelector("#toggle");
const status = document.querySelector("#status");

toggle.addEventListener("click", () => {
  const paused = demo.classList.toggle("paused");
  toggle.textContent = paused ? "Play animation" : "Pause animation";
  toggle.setAttribute("aria-pressed", String(paused));
  status.textContent = paused ? "PAUSED" : "NOW PLAYING";
});
