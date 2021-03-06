import React, { useEffect } from "react";
import profilePicture from "../images/linkedInPic.jpg";
import 'fontsource-roboto';
import "../css/About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ eduSkillSection, projectsSection, contactSection }) => {

    useEffect(() => {
        Aos.init({duration:1500});
    }, [])

    const gotToEduSkillSection = () => window.scrollTo({ top: eduSkillSection.current.offsetTop, behavior:"smooth" });
    const gotToProjectsSection = () => window.scrollTo({ top: projectsSection.current.offsetTop, behavior:"smooth" });
    const gotToContactSection = () => window.scrollTo({ top: contactSection.current.offsetTop, behavior:"smooth" });

    return (
        <div className="aboutContainer" >
            <div className="aboutLeft">
                <div data-aos="fade-right" className="aboutContext">
                    <div className="aboutIntro">
                        <p className="aboutMe">Hi, my name is <i className="terminal fas fa-terminal"/><i className="aboutName fas">Jovanni Luna</i><br/>An aspiring Full-Stack Web Developer</p>
                    </div>
                    <div data-aos="fade-up" className="aboutButtonContainer">
                        <button className="aboutButton" onClick={gotToEduSkillSection}>Skills <i className="fas fa-code"/></button>
                        <button className="aboutButton" onClick={gotToProjectsSection}>Projects <i className="fas fa-laptop-code"/></button>
                        <button className="aboutButton" onClick={gotToContactSection}>Contact <i className="fas fa-user-tie"/></button>
                    </div>
                </div>
            </div>
            <div className="aboutRight">
                <div className="aboutQuotePic">
                    <img data-aos="fade-left" className="aboutPhoto" src={profilePicture} alt="linkedInProfile"/>
                    <p data-aos="fade-up" className="aboutQuote">"I enjoy creating feature-rich applications and pushing the boundaries of what is possible"</p>
                </div>
            </div>
        </div>
    )
}

export default About;