import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.znnkafb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 21.25l3.75-18h2.5l3.75 18M4.75 7.5h14.5M5.5 12h13m-9.57 0l7.39 6m-1.25-6l-7.39 6M4.75 7.5v2.25m14.5-2.25v2.25M5.5 12v2.25m13-2.25v2.25");
}
</style><path class="znnkafb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:power-pylon"} {...others} />);
}

export default Component;
