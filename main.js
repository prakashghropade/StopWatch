// function Started when the Windows loaded
window.onload = function () {

  // Declaration of all veriables

  var seconds = 0;
  var tens = 0;
  var minut = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinut = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var lapBtn = document.getElementById("button-lap");
  var list = document.getElementById("lap-list");


  // Start Button Onclick Function
  buttonStart.onclick = function () {
    Interval = setInterval(startTimer, 10);
  };

  // Stop Button Onclick Function
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

 // Reset Button Onclick Function
  buttonReset.onclick = function () {
    removeAllChildNodes(list);
    tens = "0";
    seconds = "0";
    minut = "0";
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinut.innerHTML = "00";
    clearInterval(Interval);
  };

  // Function to Remove child nodes of the List of Lap time 
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }


  // Lap Button OnClick Function
  lapBtn.onclick = function () {
    let ele = document.createElement("li");
    ele.setAttribute("class", "child-list");
    if (minut <= 9 && seconds <= 9 && tens <= 9) {
      ele.innerHTML = `0${minut} : 0${seconds}: 0${tens}`;
    } else if (minut <= 9 && seconds <= 9) {
      ele.innerHTML = `0${minut} : 0${seconds}: ${tens}`;
    } else if (minut <= 9 && tens <= 9) {
      ele.innerHTML = `0${minut} : ${seconds}: 0${tens}`;
    } else if (seconds <= 9 && tens <= 9) {
      ele.innerHTML = `${minut} : 0${seconds}: 0${tens}`;
    } else if (minut <= 9) {
      ele.innerHTML = `0${minut} : ${seconds}: ${tens}`;
    } else {
      ele.innerHTML = `${minut} : ${seconds}: ${tens}`;
    }

    list.appendChild(ele);
  };


// Function on which value of second, minute and millisecond set

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds == 60) {
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      minut++;
      appendMinut.innerHTML = minut;
    }

    if (minut <= 9) {
      appendMinut.innerHTML = "0" + minut;
    }
  }
};
