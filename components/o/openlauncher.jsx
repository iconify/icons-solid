import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j4yenbcng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.5v-29a4 4 0 0 1 4-4a4 4 0 0 1 4 4v25");
}

.l10mylhjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-25");
}

.p4od-tbho {
  width: 37px;
  height: 8px;
  x: 5.5px;
  y: 34.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
}
</style><rect class="p4od-tbho"/><path class="l10mylhjf"/><path class="j4yenbcng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:openlauncher"} {...others} />);
}

export default Component;
