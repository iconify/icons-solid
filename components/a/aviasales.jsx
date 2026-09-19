import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b9pekrjoo {
  width: 12.79px;
  height: 16.04px;
  x: 17.62px;
  y: 15.7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.ey71jsxvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.34 31.4a5 5 0 0 1-5-5v-4.78a5 5 0 0 1 5-5h1.16V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v7.12h1.16a5 5 0 0 1 5 5v4.78a5 5 0 0 1-5 5H5.5v7.1a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-7.1z");
}

.npyjqwb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.57 27v1.27a1.5 1.5 0 0 0 1.5 1.5h1.27");
}

.ym9xx40zr {
  width: 18.05px;
  height: 23.92px;
  x: 14.99px;
  y: 13.07px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6px;
  ry: 6px;
}
</style><path class="ey71jsxvr"/><rect class="ym9xx40zr"/><rect class="b9pekrjoo"/><path class="npyjqwb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aviasales"} {...others} />);
}

export default Component;
