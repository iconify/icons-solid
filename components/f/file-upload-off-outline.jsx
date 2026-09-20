import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xezi14bmo {
  fill: currentColor;
  d: path("m12 4l5 5l-1.4 1.45l-2.6-2.6v2.3l-2-2l-1.575-1.575zm-1 12v-5l2 2v3zm8.775 6.625L17.15 20H6q-.825 0-1.412-.587T4 18v-3h2v3h9.15L1.375 4.225L2.8 2.8l18.4 18.4zM20 17.15l-2-2V15h2z");
}
</style><path class="xezi14bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-upload-off-outline"} {...others} />);
}

export default Component;
