import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cx2bfibcy {
  width: 24.295px;
  height: 15.857px;
  x: 11.835px;
  y: 16.087px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.928px;
  ry: 7.928px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.lnztsbg7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.894 22.206h4.173a1.77 1.77 0 1 1 0 3.538h-4.173a1.77 1.77 0 0 1 0-3.538");
}
</style><path class="i9clfwm2k"/><rect class="cx2bfibcy"/><path class="lnztsbg7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:linkbox"} {...others} />);
}

export default Component;
