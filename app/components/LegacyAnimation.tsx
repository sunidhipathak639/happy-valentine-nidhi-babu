"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import customization from "../../customize.json";
import "../styles/LegacyAnimation.css"; // Ensure this path is correct

export default function LegacyAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animation Timeline logic ported from script/main.js
      if (!containerRef.current) return;

      const textBoxChars = containerRef.current.querySelector(".hbd-chatbox");
      const hbd = containerRef.current.querySelector(".wish-hbd");

      if (textBoxChars) {
        textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
          .split("")
          .join("</span><span>")}</span>`;
      }

      if (hbd) {
        hbd.innerHTML = `<span>${hbd.innerHTML
          .split("")
          .join("</span><span>")}</span>`;
      }

      const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg",
      };

      const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg",
      };

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(".container", { duration: 0.1, visibility: "visible" })
        .from(".one", { duration: 0.7, opacity: 0, y: 10 })
        .from(".two", { duration: 0.4, opacity: 0, y: 10 })
        .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=2.5")
        .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
        .from(".three", { duration: 0.7, opacity: 0, y: 10 })
        .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=2")
        .from(".four", { duration: 0.7, scale: 0.2, opacity: 0 })
        .from(".fake-btn", { duration: 0.3, scale: 0.2, opacity: 0 })
        .to(".hbd-chatbox span", {
          duration: 0.5,
          visibility: "visible",
          stagger: 0.05,
        })
        .to(".fake-btn", {
          duration: 0.1,
          backgroundColor: "rgb(127, 206, 248)",
        })
        .to(
          ".four",
          { duration: 0.5, scale: 0.2, opacity: 0, y: -150 },
          "+=0.7",
        )
        .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-3 strong", {
          duration: 0.5,
          scale: 1.2,
          x: 10,
          backgroundColor: "rgb(21, 161, 237)",
          color: "#fff",
        })
        .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
        .from(
          ".idea-5",
          {
            duration: 0.7,
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
          },
          "+=0.5",
        )
        .to(
          ".idea-5 span",
          {
            duration: 0.7,
            rotation: 90,
            x: 8,
          },
          "+=0.4",
        )
        .to(
          ".idea-5",
          {
            duration: 0.7,
            scale: 0.2,
            opacity: 0,
          },
          "+=2",
        )
        .from(".idea-6 span", {
          duration: 0.8,
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: "expo.out",
          stagger: 0.2,
        })
        .to(
          ".idea-6 span",
          {
            duration: 0.8,
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: "expo.out",
            stagger: 0.2,
          },
          "+=1",
        )
        .fromTo(
          ".baloons img",
          { opacity: 0.9, y: 1400 },
          { duration: 2.5, opacity: 1, y: -1000, stagger: 0.2 },
        )
        .from(
          ".girl-dp",
          {
            duration: 0.5,
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
          },
          "-=2",
        )
        .from(".hat", {
          duration: 0.5,
          x: -100,
          y: 350,
          rotation: -180,
          opacity: 0,
        })
        .from(".wish-hbd span", {
          duration: 0.7,
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        })
        .fromTo(
          ".wish-hbd span",
          { scale: 1.4, rotationY: 150 },
          {
            duration: 0.7,
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: "expo.out",
            stagger: 0.1,
          },
          "party",
        )
        .from(
          ".wish h5",
          {
            duration: 0.5,
            opacity: 0,
            y: 10,
            skewX: "-15deg",
          },
          "party",
        )
        .to(".eight svg", {
          duration: 1.5,
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
          stagger: 0.3,
        })
        .to(".six", {
          duration: 0.5,
          opacity: 0,
          y: 30,
          zIndex: "-1",
        })
        .from(".nine p", { duration: 1, ...ideaTextTrans, stagger: 1.2 })
        .from(
          ".play-game-btn",
          {
            duration: 1,
            opacity: 0,
            y: 20,
            pointerEvents: "none",
          },
          "+=0.5",
        )
        .to(
          ".last-smile",
          {
            duration: 0.5,
            rotation: 90,
          },
          "+=1",
        );
    }, containerRef); // Scope to containerRef

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleReplay = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div className="legacy-container-wrapper" ref={containerRef}>
      <div className="container">
        <div className="one">
          <h1 className="one">
            Hey
            <span id="name">{customization.name}</span>
          </h1>
          <p className="two" id="greetingText">
            {customization.greetingText}
          </p>
        </div>
        <div className="three">
          <p>It&apos;s Valentine!!! :D</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox">
              Happy Valentine&apos;s Day!! Yeee! Love and blah blah...
            </p>
            <p className="fake-btn">Send</p>
          </div>
        </div>
        <div className="five">
          <p className="idea-1">That&apos;s what I was going to do.</p>
          <p className="idea-2">But then I stopped.</p>
          <p className="idea-3">
            I realised, I wanted to do something <strong>special</strong>.
          </p>
          <p className="idea-4">Because,</p>
          <p className="idea-5">
            You are Special
            <span>:)</span>
          </p>
          <p className="idea-6">
            <span>S</span>
            <span>O</span>
          </p>
        </div>
        <div className="six">
          {/* Note: In original code, image path is populated JS. Here we use customize.json directly */}
          <img
            src={customization.imagePath || "img/vector.jpg"}
            alt="Girlfriend"
            className="girl-dp"
            id="imagePath"
          />
          <div className="wish">
            <h3 className="wish-hbd">Happy Valentine&apos;s Day Gorgeous</h3>
            <h5 id="wishText">{customization.wishText}</h5>
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/smiling.svg" alt="Smiling Face" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/music-note.svg" alt="Music Note" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/music-note.svg" alt="Music Note" />
            <img src="img/smiling.svg" alt="Smiling Face" />
            <img src="img/happy.svg" alt="Happy Face" />
            <img src="img/balloon.svg" alt="Balloon" />
            <img src="img/heart.svg" alt="Heart" />
            <img src="img/smiling.svg" alt="Smiling Face" />
          </div>
        </div>
        <div className="eight">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>
        <div className="nine">
          <p>Okay, now come back and tell me if you liked it.</p>
          <p className="last-smile">:)</p>
          <button
            onClick={onComplete}
            className="play-game-btn mt-8 px-6 py-3 bg-pink-500 text-white rounded-full font-bold text-xl hover:bg-pink-600 transition-colors shadow-lg animate-bounce"
            style={{ zIndex: 100, position: "relative", pointerEvents: "auto" }}
          >
            Play a Special Game for Me →
          </button>
        </div>
      </div>
    </div>
  );
}
