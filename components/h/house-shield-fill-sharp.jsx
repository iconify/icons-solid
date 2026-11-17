import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.va5oq3k_e {
  fill: currentColor;
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM16 12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2c0 1.087.283 2.142.969 3c.676.844 1.629 1.417 2.584 1.894a1 1 0 0 0 .894 0C14.546 17.845 15.999 16.581 16 14Z");
}
</style><path class="va5oq3k_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-shield-fill-sharp"} {...others} />);
}

export default Component;
