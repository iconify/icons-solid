import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h5mrkobts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.605 36.173l-9.912-9.633l-10.028 9.633");
}

.mtdvv1q2d {
  width: 33.712px;
  height: 30.958px;
  x: 9.788px;
  y: 8.521px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.051px;
}

.oo3wg_ilo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.288h9.695M4.5 31.106h9.695");
}

.s2p89rmbq {
  cx: 27.553px;
  cy: 20.061px;
  r: 6.481px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="mtdvv1q2d"/><path class="oo3wg_ilo"/><circle class="s2p89rmbq"/><path class="h5mrkobts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-contacts"} {...others} />);
}

export default Component;
