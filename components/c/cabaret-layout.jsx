import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ra2y393yk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0M11.5 17h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 11.5 17m8.237-3.195l.708.708a1.75 1.75 0 0 1 0 2.474l-.708.708a1.75 1.75 0 0 1-2.474 0l-.708-.708a1.75 1.75 0 0 1 0-2.474l.708-.708a1.75 1.75 0 0 1 2.474 0m-13 0l.708.708a1.75 1.75 0 0 1 0 2.474l-.708.708a1.75 1.75 0 0 1-2.474 0l-.708-.708a1.75 1.75 0 0 1 0-2.474l.708-.708a1.75 1.75 0 0 1 2.474 0");
}
</style><path class="ra2y393yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cabaret-layout"} {...others} />);
}

export default Component;
