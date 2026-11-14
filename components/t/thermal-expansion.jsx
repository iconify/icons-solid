import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j28bmqb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 10h12.5A1.75 1.75 0 0 1 20 11.75v.5A1.75 1.75 0 0 1 18.25 14H5.75A1.75 1.75 0 0 1 4 12.25v-.5A1.75 1.75 0 0 1 5.75 10M10 3c-1 1.5 1 2.5 0 4m4-4c-1 1.5 1 2.5 0 4M2.5 19h19M4.75 16.75L2.5 19l2.25 2.25m14.5-4.5L21.5 19l-2.25 2.25");
}
</style><path class="j28bmqb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thermal-expansion"} {...others} />);
}

export default Component;
