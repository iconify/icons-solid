import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hf4a2ubmv {
  width: 39px;
  height: 26.897px;
  x: 4.5px;
  y: 10.552px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.017px;
  ry: 2.017px;
}

.s59r8i2qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.88 27.362h13.448M9.879 32.07h29.587");
}
</style><rect class="hf4a2ubmv"/><path class="s59r8i2qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ar-card"} {...others} />);
}

export default Component;
