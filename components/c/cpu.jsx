import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ln28-6n3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.014 5.5h17.971v3.171H15.014zm0 33.829h17.971V42.5H15.014zM42.5 15.015v17.971h-3.171V15.015zm-37-.001h3.171v17.971H5.5z");
}

.nksm-1bjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.671 8.671h30.657v30.657H8.671z");
}

.wii4t8bsp {
  width: 20px;
  height: 20px;
  x: 14px;
  y: 13.347px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><path class="ln28-6n3w"/><rect class="wii4t8bsp"/><path class="nksm-1bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cpu"} {...others} />);
}

export default Component;
