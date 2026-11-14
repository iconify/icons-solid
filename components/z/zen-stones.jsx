import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9qe-fbap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 16.5a7 2.75 0 1 0 14 0a7 2.75 0 1 0-14 0m2-5.25a5 2.25 0 1 0 10 0a5 2.25 0 1 0-10 0M8.75 7a3.25 1.75 0 1 0 6.5 0a3.25 1.75 0 1 0-6.5 0");
}
</style><path class="c9qe-fbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:zen-stones"} {...others} />);
}

export default Component;
