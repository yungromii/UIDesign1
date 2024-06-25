document.getElementById('p1-button').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container');
  videoContainer.classList.toggle('hidden');
});

document.getElementById('hide-video').addEventListener('click', function() {
  document.getElementById('video-container').classList.add('hidden');
});
