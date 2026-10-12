import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uj6s_imki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.5h10a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5h-2.5q-2.5-2.25-5 0H7A2.5 2.5 0 0 1 4.5 13v-2A2.5 2.5 0 0 1 7 8.5m3 0v2.25m4-2.25v2.25M2.75 12H4.5m15 0h1.75");
}
</style><path class="uj6s_imki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:safety-goggles"} {...others} />);
}

export default Component;
