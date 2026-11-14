import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m414sinup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3h4.5A1.75 1.75 0 0 1 16 4.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 6.75v-2A1.75 1.75 0 0 1 9.75 3M8.5 20.5l3.5-12l3.5 12M5.25 3q-2.5 3 0 6m13.5-6q2.5 3 0 6");
}
</style><path class="m414sinup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tracking-base-station"} {...others} />);
}

export default Component;
