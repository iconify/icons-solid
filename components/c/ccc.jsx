import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.z259k73vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.1 25.64v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04m9.2 3.28v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04m9.2 3.28v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04");
}
</style><rect class="j3s9ivbxi"/><path class="z259k73vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ccc"} {...others} />);
}

export default Component;
