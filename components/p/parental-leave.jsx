import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgxe0sbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M4 21v-9a4 4 0 0 1 8 0v9m3.75-10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M15 21v-4.75a2.5 2.5 0 0 1 5 0V21M2 21h20");
}
</style><path class="wgxe0sbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parental-leave"} {...others} />);
}

export default Component;
