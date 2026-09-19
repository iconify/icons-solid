import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a6kp7004i {
  width: 24.818px;
  height: 39px;
  x: 11.591px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.546px;
  ry: 3.546px;
}

.cr2ohcbfq {
  width: 9.611px;
  height: 8.12px;
  x: 19.195px;
  y: 23.022px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.182px;
  ry: 1.182px;
}

.fiehw1buk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.776 10.909h18.449v26.182H14.776z");
}

.tsehhh46u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.045 23.022v-2.28c.033-4.582 6.198-4.54 6.214.054v2.226");
}
</style><rect class="a6kp7004i"/><path class="fiehw1buk"/><rect class="cr2ohcbfq"/><path class="tsehhh46u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:p-service"} {...others} />);
}

export default Component;
