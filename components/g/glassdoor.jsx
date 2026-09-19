import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wz4anbbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 10.5v20h6v-20h21a6 6 0 0 0-6-6h-15a6 6 0 0 0-6 6m21 27h-21a6 6 0 0 0 6 6h15a6 6 0 0 0 6-6v-20h-6z");
}
</style><path class="wz4anbbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:glassdoor"} {...others} />);
}

export default Component;
