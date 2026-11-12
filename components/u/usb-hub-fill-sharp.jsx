import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cbq3mn7cw {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8V8H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM7 16a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}
</style><path class="cbq3mn7cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:usb-hub-fill-sharp"} {...others} />);
}

export default Component;
