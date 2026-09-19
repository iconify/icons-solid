import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.etk31_btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.782 6.052l6.718 6.636l-13.626 13.743l-7.003 1.505c-1.447.31-1.675-.4-1.514-1.223l1.325-6.778z");
}

.njln8qp9v {
  cx: 23.03px;
  cy: 37.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.211px;
  ry: 4.189px;
}

.nwub90b7i {
  cx: 9.711px;
  cy: 24.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.211px;
  ry: 4.189px;
}

.pxfv218sp {
  cx: 9.711px;
  cy: 37.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.211px;
  ry: 4.189px;
}

.z0cw8lqgu {
  cx: 36.349px;
  cy: 37.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.211px;
  ry: 4.189px;
}
</style><ellipse class="nwub90b7i"/><ellipse class="pxfv218sp"/><ellipse class="njln8qp9v"/><ellipse class="z0cw8lqgu"/><path class="etk31_btl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:led-icon-editor"} {...others} />);
}

export default Component;
