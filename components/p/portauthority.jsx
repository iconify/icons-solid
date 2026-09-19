import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mnzs__qxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.112 14.455v4.386h17.776v-4.386");
}

.xc_bsnbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.448 39.5v-2.916h-2.252v-3.04h-5.741v-19.09h27.09v19.09h-5.741v3.04H29.55V39.5m-11.102 0h11.103M24 18.841v-4.386m-2.222 4.386v-4.386m4.444 4.386v-4.386m4.437 4.386v-4.386m-13.342 4.386v-4.386m11.127 4.386v-4.386m-8.888 4.386v-4.386");
}
</style><path class="xc_bsnbal"/><path class="mnzs__qxh"/><rect class="jc1oydeao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:portauthority"} {...others} />);
}

export default Component;
