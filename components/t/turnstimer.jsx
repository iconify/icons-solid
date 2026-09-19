import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g_vsypbwq {
  cx: 34.779px;
  cy: 34.779px;
  r: 7.721px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hw-v7l81k {
  cx: 13.221px;
  cy: 34.779px;
  r: 7.721px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ozvk34bdi {
  cx: 13.221px;
  cy: 13.221px;
  r: 7.721px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pp-yrkb0a {
  cx: 34.779px;
  cy: 13.221px;
  r: 7.721px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z2k0_zvnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.221 8.288v4.94l3.322 3.3m18.236-8.24v4.94l-3.322 3.3M13.221 39.712v-4.94l3.322-3.3m18.236 8.24v-4.94l-3.322-3.3");
}
</style><circle class="ozvk34bdi"/><circle class="pp-yrkb0a"/><circle class="hw-v7l81k"/><circle class="g_vsypbwq"/><path class="z2k0_zvnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turnstimer"} {...others} />);
}

export default Component;
