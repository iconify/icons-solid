import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s79xpcu8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.884 19.617L18.947 39.5h16.13L13.15 8.5h19.633c5.707 0 10.334 4.626 10.334 10.333S38.49 29.166 32.784 29.166h-5.016");
}
</style><path class="s79xpcu8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uprock-earning"} {...others} />);
}

export default Component;
