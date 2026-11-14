import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx-qeff6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9A1.5 1.5 0 0 1 18 4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 4a1.5 1.5 0 0 1 1.5-1.5m.75 13l-1.5-10m10.5 0l-1.5 10m-10.25 6h13V18c0-1.5-1-2.5-2.5-2.5H8c-1.5 0-2.5 1-2.5 2.5Zm6.5-3h.01");
}
</style><path class="qx-qeff6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:baby-food-maker"} {...others} />);
}

export default Component;
