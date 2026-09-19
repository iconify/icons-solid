import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gkbdyvbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M34.5 42.5c-3 0-17-4-17-13m17-24c-3 0-17 4-17 13v11");
}

.j3s9ivbxi {
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

.z85w93wkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M13.5 42.5c3 0 17-4 17-13m-17-24c3 0 17 4 17 13v11");
}
</style><path class="z85w93wkc"/><path class="gkbdyvbsy"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:outbank"} {...others} />);
}

export default Component;
