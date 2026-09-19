import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.swmxm7b6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.235 42.262V23.061h19.2v-6.315H30.95V5.262H16.919v11.484H5.435v14.031h11.484v11.485z");
}

.yzsns7bhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.685 42.262v-14.75h14.75m-14.75 0l13.069 13.069");
}
</style><path class="swmxm7b6v"/><path class="yzsns7bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:driefcase"} {...others} />);
}

export default Component;
