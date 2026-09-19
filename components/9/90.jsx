import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.casix8wnj {
  cx: 17.968px;
  cy: 21.724px;
  r: 4.468px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g_gidsosc {
  width: 8.937px;
  height: 13.489px;
  x: 25.563px;
  y: 17.255px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.468px;
  ry: 4.468px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.z5fxt6b4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.895 29.1c.745.975 1.88 1.645 3.76 1.645h.313c2.468 0 4.469-2 4.469-4.469v-4.552");
}
</style><circle class="casix8wnj"/><path class="z5fxt6b4y"/><rect class="g_gidsosc"/><path class="i9clfwm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:90"} {...others} />);
}

export default Component;
