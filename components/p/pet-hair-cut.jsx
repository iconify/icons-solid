import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zuktvtbka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 6.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m0 10.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M8.5 8l12 8m-12 0l12-8M14 21c.5-2.5 2.5-2.5 3-1s2.5 1.5 3-1");
}
</style><path class="zuktvtbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pet-hair-cut"} {...others} />);
}

export default Component;
