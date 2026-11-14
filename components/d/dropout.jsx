import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g7ynton9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11.5 3a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-9.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m3-11.25l6.5 1.5M6.5 8l1 7m8.25-4.75l-6 5.5M15 15l6 6m0-6l-6 6");
}
</style><path class="g7ynton9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dropout"} {...others} />);
}

export default Component;
