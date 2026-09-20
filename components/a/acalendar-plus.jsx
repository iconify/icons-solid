import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m-ff1gbzq {
  width: 35px;
  height: 36px;
  x: 6.5px;
  y: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.z-zlswkyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 4.5v6m-19-6v6m14.848 17.738a5.348 5.348 0 1 1-10.697 0v-3.476a5.348 5.348 0 1 1 10.697 0");
}

.zrto8rbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.488 33.587a2.14 2.14 0 0 1-2.14-2.14V19.413M31.984 17h5.273m-2.637-2.636v5.272");
}
</style><rect class="m-ff1gbzq"/><path class="z-zlswkyr"/><path class="zrto8rbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:acalendar-plus"} {...others} />);
}

export default Component;
