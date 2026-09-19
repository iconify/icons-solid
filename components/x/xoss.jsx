import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ol5zxi_8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.327 24.04L36.547 5.5H42.5v5.731L29.897 24.04L42.5 36.853V42.5h-5.7zM11.117 5.5l10.245 10.236l-5.602 5.746L5.5 11.232V5.5zM5.5 36.797V42.5h5.813l10.13-10.156l-5.784-5.788z");
}
</style><path class="ol5zxi_8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xoss"} {...others} />);
}

export default Component;
