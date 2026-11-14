import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dl9fhebkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 14h2a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 13 21h-2a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 11 14m1 0V7m2.298-1.928a3 3 0 0 1 .3 3.428m1.998-5.357a6 6 0 0 1 .6 6.857M9.402 8.5a3 3 0 0 1 .3-3.428M6.804 10a6 6 0 0 1 .6-6.857");
}
</style><path class="dl9fhebkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:elt-beacon"} {...others} />);
}

export default Component;
