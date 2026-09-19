import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lagch7_7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.16 32.837l17.67-17.671c4.88-4.88 12.791-4.88 17.671-.002l-17.67 17.671c-4.88 4.88-12.792 4.881-17.672.001s-4.88-12.793 0-17.672s12.792-4.88 17.672 0");
}
</style><path class="lagch7_7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:privy"} {...others} />);
}

export default Component;
