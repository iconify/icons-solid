import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7ramsbot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5v-19m10 19v-10M3.5 3c2.25-1 4.5 1.5 7 .5V9c-2.5 1-4.75-1.5-7-.5m10 3.5c2.25-1 4.5 1.5 7 .5V18c-2.5 1-4.75-1.5-7-.5");
}
</style><path class="s7ramsbot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:marker-flags"} {...others} />);
}

export default Component;
