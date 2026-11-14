import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l1-kvacsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 20.5V15Q6 14.5 6 12V7a2 2 0 0 1 4 0a2 2 0 0 1 4 0a2 2 0 0 1 4 0v5q0 2.5-2.5 3v5.5M2.5 9H6m12 0h3.5M6 12h6.5");
}
</style><path class="l1-kvacsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hold-handrail"} {...others} />);
}

export default Component;
