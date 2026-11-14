import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtcbegpcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 11.5h-19V18H5l4.5-3.5h5v-3M8.875 6h4.75A1.375 1.375 0 0 1 15 7.375a1.375 1.375 0 0 1-1.375 1.375h-4.75A1.375 1.375 0 0 1 7.5 7.375A1.375 1.375 0 0 1 8.875 6");
}
</style><path class="gtcbegpcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:biathlon-rifle"} {...others} />);
}

export default Component;
