function App() {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
    navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
      console.log(stream)
      let video = document.getElementById("video")
      video.srcObject = stream
      video.onLoadedmetadata = (ev) => video.play()
    }).catch((error) => console.log(error))
  }
  return (
    <div className="App">
       <video src="" id="video" autoPlay={true}></video>
    </div>  
  );
}

export default App;
