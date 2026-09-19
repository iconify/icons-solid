import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bv_j8mzka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.242 32.924h20.964m-36.706 0h9.773M5.5 24.055h31.034m-22.188-8.869h27.86m-36.706 0h2.537");
}

.fn0j2quja {
  cx: 39.516px;
  cy: 23.921px;
  r: 2.984px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x2h7jqpfl {
  cx: 11.026px;
  cy: 15.076px;
  r: 2.984px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xtjpn0e4f {
  cx: 18.257px;
  cy: 32.924px;
  r: 2.984px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="bv_j8mzka"/><circle class="x2h7jqpfl"/><circle class="fn0j2quja"/><circle class="xtjpn0e4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:intiface-central"} {...others} />);
}

export default Component;
