import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g6zvs-b_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.5 20.179l2.625-1.429v10.5M22.228 24a2.625 2.625 0 0 0 0 5.25h1.706a2.625 2.625 0 0 0 0-5.25m0 0a2.625 2.625 0 0 0 0-5.25h-1.706a2.625 2.625 0 0 0 0 5.25m0 0h1.706m5.316 0h5.25m-2.625-2.625v5.25");
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
</style><rect class="j3s9ivbxi"/><path class="g6zvs-b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:18-plus"} {...others} />);
}

export default Component;
