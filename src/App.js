import React, { useRef } from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
export default function App() {
  //animation

  const { ref: lion } = useWebAnimations({
    keyframes: {
      transform: ["translate(10px)", "translate(400px)"],
    },
    timing: {
      duration: 2000,
      // delay: 200,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const { ref: horse } = useWebAnimations({
    keyframes: {
      transform: ["translate(10px)", "translate(400px)"],
    },
    timing: {
      duration: 2000,
      // delay: 200,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const { ref: tree } = useWebAnimations({
    keyframes: {
      transform: ["translate(1500px)", "translate(-1500px)"],
    },
    timing: {
      duration: 6000,
      // delay: 200,
      iterations: Infinity,
      // direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const { ref: treeTwo } = useWebAnimations({
    keyframes: {
      transform: ["translate(1300px)", "translate(-1300px)"],
    },
    timing: {
      duration: 5000,
      // delay: 200,
      iterations: Infinity,
      // direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const { ref: treeThree } = useWebAnimations({
    keyframes: {
      transform: ["translate(1100px)", "translate(-1100px)"],
    },
    timing: {
      duration: 5000,
      // delay: 200,
      iterations: Infinity,
      // direction: "alternate",
      easing: "ease-in-out",
    },
  });
  return (
    <div>
      <div>
        <img
          className="imgBg"
          src="https://media.gettyimages.com/videos/grass-animation-video-id1132904944?s=640x640"
        />
        <div>
          <div ref={tree}>
            <img
              className="tree1"
              src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Trees-PNG-Clipart/Tree_Transparent_Clipart_Picture.png?m=1434276625"
            />
          </div>

          <div ref={treeTwo}>
            <img
              className="tree2"
              src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Trees-PNG-Clipart/Tree_Transparent_Clipart_Picture.png?m=1434276625"
            />
          </div>
          <div ref={treeThree}>
            <img
              className="tree3"
              src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Trees-PNG-Clipart/Tree_Transparent_Clipart_Picture.png?m=1434276625"
            />
          </div>


          <div className="lion" ref={horse}>
            <img
              className="imgSize"
              src="https://cdn.lowgif.com/full/a7cbb4c04b0592e9-running-lion-animated-gif-www-pixshark-com-images.gif"
            />
          </div>
          <div className="goat" ref={lion}>
            <img
              className="horseimgSize"
              src="https://bestanimations.com/Animals/Mammals/Horses/animated-horse-gif-38.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
