import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yco9r3b5b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 22v-9a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0l8 7c.217.19.341.465.341.753v11a1 1 0 0 1-1 1Z");
}
</style><path class="yco9r3b5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-garage-open-bulk-sharp"} {...others} />);
}

export default Component;
