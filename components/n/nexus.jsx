import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nqh2lvbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.526 25.5H25.5v3.024L39.475 42.5l3.025-3.025zM22.5 28.526V25.5h-3.024L5.5 39.475L8.525 42.5zM19.474 22.5H22.5v-3.024L8.525 5.5L5.5 8.525zm6.026-3.026V22.5h3.024L42.5 8.525L39.475 5.5z");
}
</style><path class="nqh2lvbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nexus"} {...others} />);
}

export default Component;
