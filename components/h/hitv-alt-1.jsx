import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.qx-v0uo1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.5 19.333l-3.276 9.89l-3.277-9.89m-8.662 0h6.553m-3.277 9.891v-9.891m-5.815 3.338v6.553M10.5 19.333v9.891m6.553-9.891v9.891M10.5 24.259h6.553");
}

.tzekxbb9g {
  cx: 19.746px;
  cy: 19.642px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="i9clfwm2k"/><path class="qx-v0uo1a"/><circle class="tzekxbb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hitv-alt-1"} {...others} />);
}

export default Component;
