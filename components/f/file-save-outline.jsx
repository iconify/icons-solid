import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.okfwh9bxk {
  fill: currentColor;
  d: path("m18 21l4-4l-1.4-1.4l-1.6 1.6v-4.175h-2V17.2l-1.6-1.6L14 17zm-4 3v-2h8v2zm-8-4q-.825 0-1.412-.587T4 18V4q0-.825.588-1.412T6 2h7l6 6v3.025h-2V9h-5V4H6v14h6v2zm0-2V4z");
}
</style><path class="okfwh9bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-save-outline"} {...others} />);
}

export default Component;
