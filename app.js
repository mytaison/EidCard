document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        showHide();
        setInterval(showHide,10000);
        document.querySelector("audio").src="./jisanaudio.mp3";
        document.querySelector("audio").play();
    }
  }
  function showHide(){
    console.log("1")  
    document.querySelectorAll(".item").forEach(x=> x.style.display = "none");
    document.querySelector(".frontpage").style.display = "block";
    setTimeout(function(){
      console.log("2")
      document.querySelector(".frontpage").style.display = "none";
      document.querySelector(".innerPageLeft").style.display = "block";
    },4000)
    setTimeout(function(){
      console.log("3")
      document.querySelector(".innerPageLeft").style.display = "none";
      document.querySelector(".innerPageRight").style.display = "block";
    },8000)
  }
