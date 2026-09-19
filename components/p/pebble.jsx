import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dvag_dbsp {
  cx: 23.822px;
  cy: 23.909px;
  r: 13.691px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.f-zfqsbyx {
  cx: 38.488px;
  cy: 8.881px;
  r: 3.381px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wa04nob-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.413 42.5h4.817");
}
</style><circle class="dvag_dbsp"/><circle class="f-zfqsbyx"/><path class="wa04nob-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pebble"} {...others} />);
}

export default Component;
