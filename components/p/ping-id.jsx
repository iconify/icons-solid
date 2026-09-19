import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i5xflo4gr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.634 27.384v11.044m5.101 0v-16.67h3.75a7.293 7.293 0 0 1 7.293 7.293v2.084a7.293 7.293 0 0 1-7.293 7.293z");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.m5ga7fbpy {
  cx: 9.634px;
  cy: 22.279px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="m5ga7fbpy"/><path class="i5xflo4gr"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ping-id"} {...others} />);
}

export default Component;
