import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l5f67zb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.7 40.187c4.257-.99 9.028-1.227 14.8 0m-37 0c3.601-.442 7.055-1.543 11.1 0");
}

.mi8r95d2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.54 27.589c18.322-13.692 21.368 12.363 33.96-.777");
}

.uwa6zeb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.162 39.509L24 7.813l14.955 31.783M21.269 14.069l11.92 25.333");
}
</style><path class="l5f67zb4v"/><path class="uwa6zeb6g"/><path class="mi8r95d2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:abbanoa"} {...others} />);
}

export default Component;
