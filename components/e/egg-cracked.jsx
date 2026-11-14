import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n71uwuccs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11.5L8 10l2.5 1.5L13 10l2.5 1.5l3-1.5c-.5-4.5-3-7.5-6.5-7.5s-6.25 3-6.5 9m0 3.5L8 13.5l2.5 1.5l2.5-1.5l2.5 1.5l3-1.5c0 5-3 8-6.5 8s-6.5-3-6.5-6.5");
}
</style><path class="n71uwuccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:egg-cracked"} {...others} />);
}

export default Component;
