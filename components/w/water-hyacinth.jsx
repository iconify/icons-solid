import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5ysjvb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 4.5 0 1 0 6 0a3 4.5 0 1 0-6 0m3 4.5V17m0 0c-3.5 0-6.5-2-6.5-5C9 12 12 14 12 17m0 0c3.5 0 6.5-2 6.5-5c-3.5 0-6.5 2-6.5 5m-9 3.5q2.25-.75 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="w5ysjvb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-hyacinth"} {...others} />);
}

export default Component;
