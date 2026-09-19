import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.acw1d3bha {
  width: 31.32px;
  height: 17.31px;
  x: 8.35px;
  y: 24.67px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.8px;
}

.ahlvx9bqz {
  cx: 16.99px;
  cy: 15.18px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.etakanbcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 5.85l-3.66 3.67");
}

.fuh928b7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.83L9.16 9.5");
}

.jv0-78bwd {
  cx: 31.01px;
  cy: 15.18px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k3qm-mbda {
  width: 31.32px;
  height: 12.99px;
  x: 8.35px;
  y: 8.68px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.8px;
}
</style><circle class="ahlvx9bqz"/><circle class="jv0-78bwd"/><rect class="k3qm-mbda"/><path class="fuh928b7j"/><rect class="acw1d3bha"/><path class="etakanbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fdroid"} {...others} />);
}

export default Component;
