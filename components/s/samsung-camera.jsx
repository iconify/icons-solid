import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e5rma-bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.284 10.824H8.716A4.216 4.216 0 0 0 4.5 15.04v17.92a4.216 4.216 0 0 0 4.216 4.216h30.568a4.216 4.216 0 0 0 4.216-4.217V15.041a4.216 4.216 0 0 0-4.216-4.217");
}

.gdht4sb7j {
  cx: 24px;
  cy: 24px;
  r: 7.905px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sfndxs8at {
  cx: 37.703px;
  cy: 16.622px;
  r: 2.635px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="e5rma-bat"/><circle class="gdht4sb7j"/><circle class="sfndxs8at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-camera"} {...others} />);
}

export default Component;
