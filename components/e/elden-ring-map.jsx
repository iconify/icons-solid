import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ir-lbacxu {
  cx: 30.112px;
  cy: 29.645px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vnq4b5bqx {
  cx: 23.439px;
  cy: 18.355px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wqqxznbjw {
  cx: 17.888px;
  cy: 29.645px;
  r: 12.888px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vnq4b5bqx"/><circle class="ir-lbacxu"/><circle class="wqqxznbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:elden-ring-map"} {...others} />);
}

export default Component;
