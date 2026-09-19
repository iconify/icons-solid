import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tpnmsocbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.89 5.197L6.8 21.734a2 2 0 0 0-1.127 1.8v18.33a1 1 0 0 0 1.456.89l14.654-7.504l6.158 4.728l4.033-10.372l9.393-5.734a2 2 0 0 0 .958-1.707V6.097a1 1 0 0 0-1.437-.9");
}
</style><path class="tpnmsocbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:twist"} {...others} />);
}

export default Component;
