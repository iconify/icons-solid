import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dx60g5b2x {
  cx: 34.488px;
  cy: 24.534px;
  r: 4.012px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ghjjzer3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.476 24.534v-7.08");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ms_t_36di {
  cx: 13.512px;
  cy: 24.534px;
  r: 4.012px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tqbna58pt {
  cx: 24px;
  cy: 24.534px;
  r: 4.012px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v0s09lbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 24.534v-7.08");
}
</style><rect class="j3s9ivbxi"/><circle class="dx60g5b2x"/><path class="ghjjzer3r"/><circle class="tqbna58pt"/><circle class="ms_t_36di"/><path class="v0s09lbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bob-rides"} {...others} />);
}

export default Component;
