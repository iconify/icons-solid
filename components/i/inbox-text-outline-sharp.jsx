import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n28v44bcp {
  fill: currentColor;
  d: path("M7 12.25h10v-2H7zm0-3.5h10v-2H7zM3 21V3h18v18zm2-2h14v-3h-3q-.75.95-1.787 1.475T12 18t-2.212-.525T8 16H5zm8.725-3.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55M5 19h14z");
}
</style><path class="n28v44bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:inbox-text-outline-sharp"} {...others} />);
}

export default Component;
