import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.agm2qci6c {
  cx: 35.938px;
  cy: 14.493px;
  r: 2.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ifyz70onf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.78 5.5c-.45 1.62-.69 3.34-.69 5.11c0 10.61 8.6 19.21 19.21 19.21v6.13c5.11 0 9.76-2 13.2-5.27");
}

.kubg1kbgd {
  cx: 17.969px;
  cy: 14.493px;
  r: 2.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.leyi71s9w {
  cx: 26.953px;
  cy: 14.493px;
  r: 2.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="i9clfwm2k"/><path class="ifyz70onf"/><circle class="kubg1kbgd"/><circle class="leyi71s9w"/><circle class="agm2qci6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vk-messenger"} {...others} />);
}

export default Component;
