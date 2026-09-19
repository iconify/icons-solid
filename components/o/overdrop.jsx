import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r_dhm-bwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.514 23.838a4.965 4.965 0 1 1-7.026 0");
}

.wa75d3r1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.438 15.923a16.165 16.165 0 1 1-22.876 0m.001 0L24.001 4.5L35.44 15.923m-14.953 7.915l11.338-11.322m-4.311 11.322L24 20.33");
}
</style><path class="r_dhm-bwn"/><path class="wa75d3r1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:overdrop"} {...others} />);
}

export default Component;
