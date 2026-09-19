import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jwx_g6o6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.696 14.778c0-5.735 32.5-12.427 35.369-7.647c3.823 5.735-1.912 35.369-7.648 35.369c-6.691 0-27.722-20.074-27.722-27.722z");
}
</style><path class="jwx_g6o6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uklon"} {...others} />);
}

export default Component;
