import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lw36eabip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.779 12.777h26.054a3.65 3.65 0 0 0 3.648-3.65h0a3.65 3.65 0 0 0-3.649-3.648H9.482a4 4 0 0 0-4 4V38.83a3.65 3.65 0 0 0 3.648 3.65h0a3.65 3.65 0 0 0 3.649-3.649z");
}

.nvm3z7gpf {
  cx: 19.972px;
  cy: 30.159px;
  r: 0.75px;
  fill: currentColor;
}

.qmoxv5bji {
  cx: 9.63px;
  cy: 9.583px;
  r: 0.75px;
  fill: currentColor;
}

.znaicmrtz {
  cx: 19.972px;
  cy: 19.924px;
  r: 0.75px;
  fill: currentColor;
}

.zzpxenbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.927 23.573h16.481l3.55-7.297h-20.03a3.65 3.65 0 0 0-3.65 3.648h0a3.65 3.65 0 0 0 3.65 3.65Zm3.648 10.143h8.068l4.035-7.298h-15.4a4 4 0 0 0-4 4V42.48h7.297z");
}
</style><path class="lw36eabip"/><path class="zzpxenbgs"/><circle class="znaicmrtz"/><circle class="qmoxv5bji"/><circle class="nvm3z7gpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:facer"} {...others} />);
}

export default Component;
