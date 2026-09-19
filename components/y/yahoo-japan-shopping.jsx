import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.etd8jzb-g {
  cx: 14.069px;
  cy: 38.699px;
  r: 1.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xv3rqnb_i {
  cx: 29.792px;
  cy: 38.699px;
  r: 1.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zk_9ekkhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 11.685h31.203l-4.65 20.788H10.15zm26.552 20.788v3.93H11.33m25.373-24.718l.92-4.113H42.5m-21.4 11.66v5.695m4.812-5.695v5.695m-9.622-5.695v5.695");
}
</style><circle class="etd8jzb-g"/><circle class="xv3rqnb_i"/><path class="zk_9ekkhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yahoo-japan-shopping"} {...others} />);
}

export default Component;
