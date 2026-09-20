import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.psu_3sgck {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1-3.538 13.04l-2.804.935a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1m2.354 4.647a.5.5 0 0 0-.708 0L8 7.292L6.354 5.646a.5.5 0 0 0-.708.708L7.293 8L5.646 9.647a.5.5 0 0 0 .708.707L8 8.707l1.646 1.646a.5.5 0 0 0 .707-.706L8.708 8l1.646-1.646a.5.5 0 0 0 0-.708");
}
</style><path class="psu_3sgck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chat-dismiss-16-filled"} {...others} />);
}

export default Component;
