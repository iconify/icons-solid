import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lm1oxxl4k {
  fill: currentColor;
  d: path("M9.5 1a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v2.1a5.5 5.5 0 0 0-7.533 7.118l-.404 1.352c-.093.31-.079.635.026.93H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2h.585A1.5 1.5 0 0 1 6.5 1zm-3 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm4 4a4.5 4.5 0 1 1-2.133 8.46l-1.723.518a.5.5 0 0 1-.623-.622l.515-1.726A4.5 4.5 0 0 1 10.5 6");
}
</style><path class="lm1oxxl4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clipboard-chat-empty-16-filled"} {...others} />);
}

export default Component;
