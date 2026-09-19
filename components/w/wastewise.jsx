import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.audfhl_gb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 14.25h27M18.5 10a5.5 5.5 0 1 1 11 0M13 18.5v22.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0 5.5 0V18.5m1.375 24.632A2.75 2.75 0 0 0 29.5 40.75a2.75 2.75 0 1 0 5.5 0V18.5m-5.5 22.25V18.5m-11 22.25V18.5");
}
</style><path class="audfhl_gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wastewise"} {...others} />);
}

export default Component;
