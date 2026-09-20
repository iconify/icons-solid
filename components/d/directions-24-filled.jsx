import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8coag7vv {
  fill: currentColor;
  d: path("M9.713 1.962a3.25 3.25 0 0 1 4.596 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.596zm4.068 4.257a.75.75 0 0 0-1.061 1.06l1.22 1.22h-2.19a3.25 3.25 0 0 0-3.25 3.25v4a.75.75 0 0 0 1.5 0v-4c0-.966.784-1.75 1.75-1.75h2.19l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06z");
}
</style><path class="n8coag7vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:directions-24-filled"} {...others} />);
}

export default Component;
