import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g-yq4glkk {
  cx: 24px;
  cy: 37.806px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n4fr9mamk {
  cx: 24px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.onvaf8bso {
  cx: 24px;
  cy: 10.194px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xdpfam7oq {
  cx: 37.806px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zk64dqbjd {
  cx: 10.194px;
  cy: 24px;
  r: 4.694px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="n4fr9mamk"/><circle class="onvaf8bso"/><circle class="g-yq4glkk"/><circle class="xdpfam7oq"/><circle class="zk64dqbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swissid"} {...others} />);
}

export default Component;
