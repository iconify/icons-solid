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

.qu5r7zb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.853 21.318l-2.024 5.364l-2.024-5.364m-7.523 4.344a2.024 2.024 0 0 1-3.782-1.005v-1.315a2.023 2.023 0 0 1 3.78-1.008m16.955 3.326a2.024 2.024 0 0 1-3.783-1.003v-1.315a2.024 2.024 0 0 1 4.048 0V24h-4.048m-11.209-.658a2.024 2.024 0 0 1 4.048 0v1.316a2.024 2.024 0 0 1-4.048 0z");
}
</style><path class="qu5r7zb7e"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cove"} {...others} />);
}

export default Component;
