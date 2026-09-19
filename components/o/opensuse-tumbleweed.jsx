import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.irz6ktbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 24A9.25 9.25 0 1 1 24 14.75M33.25 24A9.25 9.25 0 1 1 24 33.25M33.25 24h-18.5M24 14.75v18.5");
}

.t234cpgpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.75h9.25V5.5M42.5 33.25h-9.25v9.25");
}
</style><path class="irz6ktbyv"/><path class="t234cpgpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:opensuse-tumbleweed"} {...others} />);
}

export default Component;
