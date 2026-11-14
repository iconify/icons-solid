import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1wb8gujs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 5h1A1.75 1.75 0 0 1 7 6.75v3a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 2.5 9.75v-3A1.75 1.75 0 0 1 4.25 5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 11.5 5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 9.75v-3A1.75 1.75 0 0 1 18.75 5M7 17h9.5m-2.25-2.25L16.5 17l-2.25 2.25");
}
</style><path class="s1wb8gujs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trip-meter"} {...others} />);
}

export default Component;
