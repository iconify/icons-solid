import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-3y_2bcf {
  fill: currentColor;
  d: path("M17 22v-9a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0l8 7c.217.19.341.465.341.753v11a1 1 0 0 1-1 1Zm-8-8h6v3H9Zm0 8v-3h6v3Z");
}
</style><path class="y-3y_2bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-garage-fill-sharp"} {...others} />);
}

export default Component;
