import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1i-hgoxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.5v4c-4.75 1.5-6 5-5.5 8s2.25 5 3.75 7h7c1.5-2 3.25-4 3.75-7s-.75-6.5-5.5-8v-4m-5.25 0h7");
}
</style><path class="s1i-hgoxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ceramic"} {...others} />);
}

export default Component;
