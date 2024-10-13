// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
    <footer className="mt-12 text-center">
        <p className="text-sm md:text-base text-gray-500">© 2024 Text2Card Card Maker. All rights reserved.</p>
        <p className="text-sm md:text-base text-gray-500 mt-2">The easiest way to create beautiful cards for your thoughts and quotes.</p>
        {/*
        <div className="mt-4 flex justify-center space-x-6">
            <SocialLink href="https://x.com/benshandebiao" ariaLabel="Follow Text2Card Card Maker on Twitter">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </SocialLink>
            <SocialLink href="https://github.com/qiaoshouqing/text2card" ariaLabel="Text2Card Card Maker on GitHub">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </SocialLink>
            <SocialLink href="https://pomodiary.com/" ariaLabel="Text2Card Card Maker Official Website">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </SocialLink>
        </div>
        <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Friendly Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <FriendlyLink href="https://www.essaysloth.com/" text="EssaySloth" />
                <FriendlyLink href="https://pomodiary.com/" text="PomoDiary" />
            </div>
        </div>
        */}
    </footer>
);

const SocialLink: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {children}
        </svg>
        <span className="sr-only">{ariaLabel}</span>
    </a>
);

const FriendlyLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
        {text}
    </a>
);

export default Footer;