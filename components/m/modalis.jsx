import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e__w1c6_z {
  cx: 24.353px;
  cy: 24.05px;
  r: 9.578px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ha3mxacxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.81c16.13-.12 16.13-.211 18.147 5.142M42.5 41.19c-16.13.12-16.13.211-18.147-5.142");
}
</style><circle class="e__w1c6_z"/><path class="ha3mxacxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:modalis"} {...others} />);
}

export default Component;
