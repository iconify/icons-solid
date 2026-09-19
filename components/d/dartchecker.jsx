import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fm_n5sbdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.886 22.475a23.5 23.5 0 0 0-15.75-.008m14.862 21.868a7 7 0 0 0-13.996 0m4.639-6.422L10.632 7.165m15.727 30.747L37.368 7.165");
}

.qevxd529p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.424 45.229a3.5 3.5 0 1 0-6.853-.024");
}
</style><path class="qevxd529p"/><circle class="cpk0fnbgt"/><path class="fm_n5sbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dartchecker"} {...others} />);
}

export default Component;
