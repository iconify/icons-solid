import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hy_hf-l-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.252 31.262A12.973 12.973 0 0 1 24 11.027m10.756 5.719A12.973 12.973 0 0 1 24 36.97");
}

.prf5x8ker {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 17.906l6.703-6.703L24 4.5h0zm-.001 12.188l-6.703 6.703l6.703 6.703z");
}
</style><path class="hy_hf-l-e"/><path class="prf5x8ker"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:improvementroll"} {...others} />);
}

export default Component;
