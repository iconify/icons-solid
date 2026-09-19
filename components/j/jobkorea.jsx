import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g8tlyzb1f {
  width: 5.3px;
  height: 8px;
  x: 34.793px;
  y: 19.994px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
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

.kvqpgubpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.907 19.994v6a2 2 0 1 1-4 0v-.664m16.596-1.336a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.296");
}

.m_x1z6nko {
  width: 5.3px;
  height: 8px;
  x: 13.907px;
  y: 19.994px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}

.wh6-0_b0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.503 20.006v8m0-2.785l4.3-5.187m0 7.972l-3.29-4");
}
</style><rect class="j3s9ivbxi"/><path class="kvqpgubpb"/><rect class="m_x1z6nko"/><rect class="g8tlyzb1f"/><path class="wh6-0_b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jobkorea"} {...others} />);
}

export default Component;
