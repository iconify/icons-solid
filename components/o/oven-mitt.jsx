import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzqwq7i4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8c0-3 3-4.5 6-4s4.5 3 4 5.5l-.5 2.5c2.5 0 3.5 2 2.5 4c-1.5 3-5 4.5-8 4.5H8Zm0 9h9");
}
</style><path class="lzqwq7i4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:oven-mitt"} {...others} />);
}

export default Component;
