import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7aqelbsu {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4v-6.175L9.4 12.4L8 11l4-4l4 4l-1.4 1.4l-1.6-1.575V17zM3 5V3h18v2z");
}
</style><path class="q7aqelbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-move-up"} {...others} />);
}

export default Component;
