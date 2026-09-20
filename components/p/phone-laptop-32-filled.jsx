import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.yzr5jbrdt {
  fill: currentColor;
  d: path("M6 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-8v-8a5 5 0 0 0-5-5H7q-.519.002-1 .126zm23 17H17v-2h12a1 1 0 1 1 0 2M6 10a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3zm3 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="yzr5jbrdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-laptop-32-filled"} {...others} />);
}

export default Component;
