import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q_o01m-wm {
  cx: 7.859px;
  cy: 24px;
  r: 4.359px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q6ee5mx8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.491 24H12.218");
}

.qyu5dvbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.359V24");
}

.r721cbb_u {
  width: 31.541px;
  height: 31.541px;
  x: 8.23px;
  y: 8.23px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.352px;
}
</style><rect transform="rotate(45 24 24)" class="r721cbb_u"/><path class="qyu5dvbal"/><circle class="q_o01m-wm"/><path class="q6ee5mx8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:passbolt"} {...others} />);
}

export default Component;
