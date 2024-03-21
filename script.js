document.addEventListener("DOMContentLoaded", function() {
    var videoFrame = document.getElementById("videoFrame");
  
    // Function to play the video when it enters the viewport
    function playVideo() {
      var videoTop = videoFrame.getBoundingClientRect().top;
      var videoBottom = videoFrame.getBoundingClientRect().bottom;
  
      // Check if the video is in the viewport
      if (videoTop < window.innerHeight && videoBottom >= 0) {
        videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } else {
        // Pause the video if it's not in the viewport
        videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }
  
    // Play the video when the page is loaded
    playVideo();
  
    // Play the video when scrolling
    window.addEventListener("scroll", playVideo);
  });
  document.getElementById("get-started-btn").addEventListener("click", function() {
    // Retrieve entered information (e.g., username, email) from local storage
    var username = localStorage.getItem("username");
    var email = localStorage.getItem("email");
  
    // Populate registration form with stored information
    document.getElementById("username").value = username;
    document.getElementById("email").value = email;
  
    // Display the registration form
    document.getElementById("registration-form").style.display = "block";
  });
  
  
    $(document).ready(function(){
        $('#carouselExampleCaptions').carousel();
    });

