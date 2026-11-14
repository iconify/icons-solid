import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4kgneuqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7a7 7 0 0 0 9 9ZM8 11.5L13.5 6m0 0h.01m-8.26 8.5v6M3 20.5h4.5m7.25-2.5l2 2L21 15.75");
}
</style><path class="g4kgneuqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:satellite-dish-check"} {...others} />);
}

export default Component;
