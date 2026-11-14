import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdd8__brh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16v-1.5c-1.75-1-3-2.9-3-5a5.5 5.5 0 0 1 11 0c0 2.1-1.25 4-3 5V16Zm.5 3.5h4m2.75-1.5l2 2L21 15.75");
}
</style><path class="wdd8__brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:idea-status"} {...others} />);
}

export default Component;
