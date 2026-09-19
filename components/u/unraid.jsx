import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w799o-hhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19v10m4.626-2.5v5M24 19v10m-9.248 2v4m4.626-8.5v5M42.5 29V19m-9.248-2v-4m-4.626 8.5v-5m9.252 5v-5");
}
</style><path class="w799o-hhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:unraid"} {...others} />);
}

export default Component;
