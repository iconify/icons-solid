import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw35xyb3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 21.5h4.5c2.25-3.5 2.5-7.5-.25-11c-.75-1 1-2 1-5a3 3 0 0 0-6 0c0 3 1.75 4 1 5c-2.75 3.5-2.5 7.5-.25 11m.25-11h4");
}
</style><path class="zw35xyb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bowling-pin"} {...others} />);
}

export default Component;
