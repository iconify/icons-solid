import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jig_ebbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.599 39.919l14.557.092M4.5 7.989h25.091v7.884H43.5v19.5H16.257V25.051H4.5z");
}

.wqkyzob-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.753 19.47h20.286v12.533H19.753z");
}
</style><path class="jig_ebbme"/><path class="wqkyzob-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ninjaone-rmm"} {...others} />);
}

export default Component;
