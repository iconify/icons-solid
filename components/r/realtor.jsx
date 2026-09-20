import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.et9-cfsyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.1 6L5.5 25H11v17h26V25h5.5zm-2.754 14.413v15m0-15h-2.183m-.647 15h5.66");
}

.vvnf-i28f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.346 26.073a5.66 5.66 0 0 1 5.66-5.66c1.438 0 2.028.287 2.478 1.36");
}
</style><path class="et9-cfsyp"/><path class="vvnf-i28f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:realtor"} {...others} />);
}

export default Component;
