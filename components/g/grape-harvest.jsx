import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wakld0bgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5V20A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5v-4.5m-19 3h19m-19-10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M4 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m11.5-2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M17 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.5 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="wakld0bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:grape-harvest"} {...others} />);
}

export default Component;
