import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x80qmxbip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h16c0 2.75-2.5 4-5 4c0 2.5-1 4.5-3 4.5s-3-2-3-4.5C6.5 8 4 6.75 4 4m8 8.5v8m-4 0h8");
}
</style><path class="x80qmxbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:margarita-glass"} {...others} />);
}

export default Component;
