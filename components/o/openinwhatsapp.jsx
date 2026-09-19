import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d8rltlqjh {
  cx: 35.053px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gghnh9uhd {
  cx: 34.442px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iw52ydbub {
  cx: 24.307px;
  cy: 40.122px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m6ss2c18m {
  cx: 12.947px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mimmxp_4f {
  cx: 35.053px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sozvyl5qb {
  cx: 24.307px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.td7wxqdcy {
  cx: 13.558px;
  cy: 29.373px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xr9kbdmoq {
  cx: 24.307px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z3ue__b7z {
  cx: 13.558px;
  cy: 18.627px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z8sr7fbzn {
  cx: 23.693px;
  cy: 7.878px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="m6ss2c18m"/><circle class="z8sr7fbzn"/><circle class="gghnh9uhd"/><circle class="z3ue__b7z"/><circle class="xr9kbdmoq"/><circle class="mimmxp_4f"/><circle class="td7wxqdcy"/><circle class="sozvyl5qb"/><circle class="d8rltlqjh"/><circle class="iw52ydbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:openinwhatsapp"} {...others} />);
}

export default Component;
