import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qs-7yhf8r {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1-3.538 13.04l-2.804.935a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1M5.5 9a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1zm0-3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z");
}
</style><path class="qs-7yhf8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chat-16-filled"} {...others} />);
}

export default Component;
