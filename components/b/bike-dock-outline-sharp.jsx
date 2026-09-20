import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uupvhfbwl {
  fill: currentColor;
  d: path("M3 21v-2l4.25-1.225L9 3h6l1.75 14.775L21 19v2zm8-3h2V5h-2z");
}
</style><path class="uupvhfbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bike-dock-outline-sharp"} {...others} />);
}

export default Component;
