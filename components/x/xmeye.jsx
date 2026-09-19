import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l3hbskbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.553 11.221v24.273c0 2.216-1.784 4-4 4H10.774");
}

.mmcv3qb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27.006L24 8.506l18.5 18.5");
}

.pscdx3bwd {
  cx: 24px;
  cy: 27.934px;
  r: 6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wq5_62bzd {
  cx: 26px;
  cy: 25.934px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="l3hbskbwk"/><circle class="pscdx3bwd"/><circle class="wq5_62bzd"/><path class="mmcv3qb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xmeye"} {...others} />);
}

export default Component;
