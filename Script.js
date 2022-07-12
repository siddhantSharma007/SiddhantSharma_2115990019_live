const name2 = document.getElementById("name2");
const name1 = document.getElementById("name1");
const date = document.getElementById("date");


name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);


function showtime() {
  let today = new Date();

  let todaydate = today.toDateString(); 



  date.innerHTML = `${todaydate}`;


}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}


function getName1() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName1(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}
function getName2() {
    if (localStorage.getItem("myData") === null) {
      name.innerHTML = "[Enter Name]";
    } else {
      name.innerHTML = localStorage.getItem("myData");
    }
  }
  
  function setName2(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        name.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }

getName();