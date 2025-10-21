function time() {
    let now = new Date()
    let hr = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    
    // console.log(`${hr}:${min}:${sec}`);

    let hours = document.getElementById('hr')
    let minutes = document.getElementById('min')
    let seconds = document.getElementById('sec')

    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec

    if(hr < 12){
        document.getElementById('greet').innerHTML = "Good Morning!"
        document.body.style.background = "#FFB74D"
    }
    else if(hr >= 12 && hr < 17){
        document.getElementById('greet').innerHTML = "Good Afternoon!"
        document.body.style.background = "#ffed4fff"
    }
    else{
        document.getElementById('greet').innerHTML = "Good Evening!"
        document.body.style.background = "#69b1d3ff"
    }
    
}
setInterval(() => {
    time()
}, 1000)
