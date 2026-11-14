import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwmyk3bxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.085 20.5H20a1.5 1.5 0 0 0 1.5-1.5v-6.898a1.5 1.5 0 0 0-2.252-1.298L7.333 17.702a1.5 1.5 0 0 0 .752 2.798M4 11.5l8-8m-8.5 1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="qwmyk3bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:terrain-slope-percent"} {...others} />);
}

export default Component;
