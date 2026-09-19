import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bribo1bfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.874 7.161v23.982");
}

.ithd4eb-c {
  cx: 24px;
  cy: 31.143px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12.126px;
  ry: 12.357px;
}

.lovuhby4g {
  cx: 26.182px;
  cy: 6.556px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.061px;
  ry: 2.057px;
}
</style><ellipse class="lovuhby4g"/><ellipse class="ithd4eb-c"/><path class="bribo1bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blubank"} {...others} />);
}

export default Component;
