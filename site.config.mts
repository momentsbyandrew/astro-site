import type { AstroInstance } from 'astro';
import { Camera, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'AC',
	favicon: 'favicon.ico',
	owner: 'Moments by Andrew',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Home',
			url: 'https://momentsbyandrew.com',
			icon: Camera,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/capi2lo/',
			icon: Instagram,
		} as SocialLink,
	],
};
