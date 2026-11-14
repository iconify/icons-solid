import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwgwpxu0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 11.873V9.25l2.25 1L21 6l-5.5-3C15 4.75 13.75 5.75 12 5.75S9 4.75 8.5 3L3 6l1.75 4.25l2.25-1V21h6.527M18 14.5v7m-3-3l3 3l3-3");
}
</style><path class="xwgwpxu0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shrink-risk"} {...others} />);
}

export default Component;
