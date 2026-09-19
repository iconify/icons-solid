import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fsx_juhum {
  width: 18.306px;
  height: 13.303px;
  x: 14.847px;
  y: 18.322px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.652px;
  ry: 6.652px;
}

.mjkp-82dp {
  width: 39px;
  height: 26.667px;
  x: 4.5px;
  y: 10.666px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.334px;
  ry: 13.334px;
}

.swtcc0ajq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.847 24.974V11.007");
}
</style><rect class="mjkp-82dp"/><rect class="fsx_juhum"/><path class="swtcc0ajq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:boulanger"} {...others} />);
}

export default Component;
