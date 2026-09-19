import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rmwop1a6h {
  cx: 35.177px;
  cy: 12.608px;
  r: 8.108px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ynv8_vb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.45 26.559A18.919 18.919 0 1 1 21.327 5.804");
}
</style><path class="ynv8_vb_k"/><circle class="rmwop1a6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:china-life-insurance"} {...others} />);
}

export default Component;
