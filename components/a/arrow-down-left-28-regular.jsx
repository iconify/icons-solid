import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.jvr028-8e {
  fill: currentColor;
  d: path("M24.78 3.22a.75.75 0 0 1 0 1.06L5.56 23.5h9.69a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 1.5 0v9.69L23.72 3.22a.75.75 0 0 1 1.06 0");
}
</style><path class="jvr028-8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-28-regular"} {...others} />);
}

export default Component;
