import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'


const ANIMATION_DELAY = 2

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    )

    const handleVideoSrc = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
            return
        }
        setVideoSrc(heroVideo)
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc)
        return () => {
            window.removeEventListener('resize', handleVideoSrc)
        };
    }, []);

    useGSAP(() => {
        gsap.to(
            ".hero-title", {
                opacity: 1,
                delay: ANIMATION_DELAY,
                ease: 'power1.out'
            }
        ),
        gsap.to(
            '#cta', {
                opacity: 1,
                y: -50,
                delay: ANIMATION_DELAY,
                ease: 'power1.out'
            }
        )
    }, [])

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className=' h-5/6 w-full flex-center flex-col '>
                <p className='hero-title '>Iphone 15 Pro</p>
                <div className=' md:w-10/12 w-9/'>
                    <video
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}
                        className=' pointer-events-none '
                    >
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div
                id='cta'
                className='flex flex-col items-center opacity-0 translate-y-20'
            >
                <a
                    href='#highlights'
                    className='btn'

                > Buy </a>
                <p
                    className=' font-normal text-xl'
                >
                    From $199/month or $999
                </p>
            </div>
        </section>
    )
}

export default Hero
