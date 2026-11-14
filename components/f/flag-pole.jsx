import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xht085bxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5c3-1.5 5 1.5 8 0c2-1 4-.75 6 .25v7.5c-2-1-4-1.25-6-.25c-3 1.5-5-1.5-8 0Zm0 0V21m-3 0h6");
}
</style><path class="xht085bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flag-pole"} {...others} />);
}

export default Component;
