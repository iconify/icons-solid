import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hjsq5-bmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 24L24 3.5L44.498 24l-20.5 20.5z");
}

.ybm6tc1eu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.635 24.823l3.879-3.878l3.878 3.878l-3.878 3.878zm8.965-8.965l3.879-3.879l3.878 3.879l-3.878 3.878zm-1.252 17.687L33.2 19.693l3.324 3.324L22.673 36.87z");
}
</style><path class="hjsq5-bmv"/><path class="ybm6tc1eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:geometry-dash-alt"} {...others} />);
}

export default Component;
