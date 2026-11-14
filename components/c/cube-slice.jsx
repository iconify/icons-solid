import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmkxj_0vk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.25 2.932l5 2.885A1.5 1.5 0 0 1 20 7.116v6.018a1.5 1.5 0 0 1-.75 1.299l-3.5 2.019a1.5 1.5 0 0 1-2.25-1.299v-4.287a1.5 1.5 0 0 0-.75-1.299L9.252 7.549a1.5 1.5 0 0 1 0-2.598l3.498-2.019a1.5 1.5 0 0 1 1.5 0M13.5 10L20 6.25M6 9.298l3.5 2.019a1.5 1.5 0 0 1 .75 1.299v4.287A1.5 1.5 0 0 1 8 18.202l-3.5-2.019a1.5 1.5 0 0 1-.75-1.299v-4.287A1.5 1.5 0 0 1 6 9.298");
}
</style><path class="mmkxj_0vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cube-slice"} {...others} />);
}

export default Component;
