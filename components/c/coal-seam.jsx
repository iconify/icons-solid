import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qy02iy_by {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21V6Q7 3.5 12 5.5t9.5-.5v16Zm0-10.5h19m-19 6h19M8 13.5h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="qy02iy_by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coal-seam"} {...others} />);
}

export default Component;
