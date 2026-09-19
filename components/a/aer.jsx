import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lnh2-j0ip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.672 19.172A4 4 0 1 1 37.5 26h-29m-2 8h29a4.25 4.25 0 1 1-3.005 7.255M18.257 7.257A6 6 0 1 1 22.499 17.5h-16");
}
</style><path class="lnh2-j0ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aer"} {...others} />);
}

export default Component;
