import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wpqjthylt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 5.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 4.25 10m7 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 12.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 11.25 10m7 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 19.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 18.25 10M5 10V5.5h14V10m-7-4.5V10");
}
</style><path class="wpqjthylt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flat-organization"} {...others} />);
}

export default Component;
