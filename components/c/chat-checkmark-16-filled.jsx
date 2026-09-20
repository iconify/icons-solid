import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nhkia3q3m {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1-3.538 13.04l-2.804.935a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1m2.854 5.147a.5.5 0 0 0-.707 0L7.25 9.043L5.854 7.647a.5.5 0 0 0-.708.707l1.75 1.75a.5.5 0 0 0 .708 0l3.25-3.25a.5.5 0 0 0 0-.708");
}
</style><path class="nhkia3q3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chat-checkmark-16-filled"} {...others} />);
}

export default Component;
