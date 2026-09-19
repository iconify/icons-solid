import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kzykk8swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.pjqxc-b-p {
  d: path("M25.43 34.025C26.22 35.21 27.605 36 29.778 36h.395a5.31 5.31 0 0 0 5.333-5.333v-5.334");
}

.s137ddbqe {
  cx: 30.172px;
  cy: 25.333px;
  r: 5.333px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yc0z4gbce {
  d: path("M11.662 25.333c0-2.963 2.37-5.333 5.136-5.333s5.334 2.37 5.334 5.333c0 1.383-.593 2.766-1.58 3.753c-2.174 1.778-8.89 6.914-8.89 6.914h10.47");
}
</style><g class="y9tr6bcfx"><path class="yc0z4gbce"/><circle class="s137ddbqe"/><path class="pjqxc-b-p"/></g><path class="kzykk8swa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calendar-samsung-29"} {...others} />);
}

export default Component;
