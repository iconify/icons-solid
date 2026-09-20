import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.d5wecvbkk {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 1v12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 12v-3h8v1a2 2 0 0 1-2 2zm8-4H8V4h6a2 2 0 0 1 2 2z");
}
</style><path class="d5wecvbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-treemap-20-regular"} {...others} />);
}

export default Component;
