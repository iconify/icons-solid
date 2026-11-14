import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tjahizb3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6c-4.25 0-7 2.5-7 6s2.75 6 7 6Zm3 2h7m-7 4h7m-7 4h7M17 5.5c-1.25 2 1.25 4 0 6.5s1.25 4.5 0 6.5");
}
</style><path class="tjahizb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rear-fog-light"} {...others} />);
}

export default Component;
