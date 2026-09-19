import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ok_d9_b9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.25 20.14H43.5v7.083h-3.606v7.343h-7.083v-7.343h-8.525");
}

.orlraabal {
  cx: 14.701px;
  cy: 23.776px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 10.201px;
  ry: 10.342px;
}

.yx9anwbgu {
  cx: 14.701px;
  cy: 23.776px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.55px;
  ry: 2.585px;
}
</style><ellipse class="orlraabal"/><ellipse class="yx9anwbgu"/><path class="ok_d9_b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:block-this"} {...others} />);
}

export default Component;
