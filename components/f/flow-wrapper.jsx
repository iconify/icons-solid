import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0fmjpbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0m0 0l-4-4.5l1.25 2.25L2.5 12l1.25 2.25L2.5 16.5Zm11 0l4-4.5l-1.25 2.25L21.5 12l-1.25 2.25l1.25 2.25Z");
}
</style><path class="m0fmjpbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flow-wrapper"} {...others} />);
}

export default Component;
