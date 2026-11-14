import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jchfxmx1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5V19m7-16.5V19m-7-16.5h7m-7 2.75h7M8.5 8h7m-7 2.75h7m-7 2.75h7M2.5 19a9.5 2.75 0 1 0 19 0a9.5 2.75 0 1 0-19 0");
}
</style><path class="jchfxmx1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ladderway"} {...others} />);
}

export default Component;
