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

.o0qle_8xp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.176 20.768l2.056 4.41l-4.409 2.055l-2.056-4.409zm-2.353 6.465L5.5 35.311m21.733-10.134L35.311 42.5M25.177 20.767L42.5 12.689M20.767 22.823L12.689 5.5");
}
</style><rect class="j3s9ivbxi"/><path class="o0qle_8xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:squad-busters"} {...others} />);
}

export default Component;
