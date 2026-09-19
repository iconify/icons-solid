import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.snu7usbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.22 5.5h25.147l-4.476 18.23M39.367 5.5L21.841 21.892m-9.621 2.472L8.634 42.5H31.97m-6.668-16.043L8.632 42.5");
}
</style><path class="snu7usbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:transfermovil"} {...others} />);
}

export default Component;
