const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm = "AM" || 'PM';

    if (h > 12){
        h= h - 12
        ampm = "PM"
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    } ,0)
}

updateClock()