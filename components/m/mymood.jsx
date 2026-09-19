import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t0bl_fvow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.656 28.823c0 4.992-6.17 9.339-11.649 9.339s-11.649-4.347-11.649-9.339zm.333-10.677a3.59 3.59 0 0 1-7.179-.001h0a3.59 3.59 0 0 1 7.18.001zm-16.8 0a3.59 3.59 0 0 1-7.179-.001h0a3.59 3.59 0 0 1 7.18.001zM45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="t0bl_fvow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mymood"} {...others} />);
}

export default Component;
