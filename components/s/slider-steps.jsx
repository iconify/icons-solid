import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnjinibvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h8m6 0h4m-9.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-8.5 6v2m4.5-2v2m4.5-2v2m4.5-2v2m4.5-2v2");
}
</style><path class="qnjinibvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:slider-steps"} {...others} />);
}

export default Component;
