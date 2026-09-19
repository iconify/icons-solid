import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c0cjxbqgb {
  cx: 12.675px;
  cy: 24px;
  r: 5.223px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fmr-albsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.325 33.175h-22.65");
}

.prx0gvbnl {
  cx: 12.675px;
  cy: 24px;
  r: 9.175px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q-7x1nbgi {
  cx: 35.325px;
  cy: 24px;
  r: 9.175px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="prx0gvbnl"/><circle class="q-7x1nbgi"/><path class="fmr-albsu"/><circle class="c0cjxbqgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nothing-recorder"} {...others} />);
}

export default Component;
