import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-h3r1b2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7 20c0-4.5 2-6.5 5-6.5s5 2 5 6.5M3.25 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 19.5c0-3 1-4.75 3.25-5.25M21.5 19.5c0-3-1-4.75-3.25-5.25");
}
</style><path class="n-h3r1b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:attendees"} {...others} />);
}

export default Component;
