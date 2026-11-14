import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kyi__ybbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 17h15.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 17m.25 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0M5 12.75L3 3.5m9 9.25V3.5m7 9.25l2-9.25");
}
</style><path class="kyi__ybbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stage-floor-lights"} {...others} />);
}

export default Component;
