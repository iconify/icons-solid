import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nt6_c4b4s {
  fill: currentColor;
  d: path("M10 2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v4h5a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4h5V8h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M7 16a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}
</style><path class="nt6_c4b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:usb-hub-fill-round"} {...others} />);
}

export default Component;
