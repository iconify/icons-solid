import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cdhgk-bjx {
  fill: currentColor;
  d: path("M8 8.707V16a2 2 0 1 0 4 0v-3.293l2 2V16a2 2 0 0 0 3.016 1.723l.13.13a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.708zM14 8v3.879l4 4V8a2 2 0 1 0-4 0M8 5.879l4 4V4a2 2 0 1 0-4 0zM4 10a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2");
}
</style><path class="cdhgk-bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:poll-off-20-filled"} {...others} />);
}

export default Component;
