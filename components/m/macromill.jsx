import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hcsnm33hw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 20V5.5H20m8 0h14.5V20");
}

.pdjpty58p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5L21 27h6l15.5 15.5");
}

.qj2mdbbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5L21 21h6L42.5 5.5M5.5 28v14.5H20m8 0h14.5V28");
}
</style><path class="hcsnm33hw"/><path class="qj2mdbbui"/><path class="pdjpty58p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:macromill"} {...others} />);
}

export default Component;
