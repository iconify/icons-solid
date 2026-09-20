import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7uifmb1n {
  fill: currentColor;
  d: path("M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z");
}
</style><path class="e7uifmb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:menu-outline-sharp"} {...others} />);
}

export default Component;
