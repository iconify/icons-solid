import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sw8_bgbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h7m-6 0V7.5a2.5 2.5 0 0 1 5 0V12m4.5 0h7m-6 0V7.5a2.5 2.5 0 0 1 5 0V12m-13 0v3c0 6 10.5 6 10.5 0v-3");
}
</style><path class="sw8_bgbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:earplugs-concert"} {...others} />);
}

export default Component;
