window.addEventListener('load', function() {
    const audio = document.getElementById('myAudio');
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaElementSource(audio);
    const gainNode = audioContext.createGain();
  
    audioSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    const randomStartTime = Math.random() * audio.duration;
    audio.currentTime = randomStartTime;
    audio.play();
  });