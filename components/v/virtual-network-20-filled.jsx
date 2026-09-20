import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lsxqr6bpb {
  fill: currentColor;
  d: path("M4.707 6.156a.75.75 0 0 1 .137 1.051L2.696 10l2.148 2.793a.75.75 0 1 1-1.188.914l-2.5-3.25a.75.75 0 0 1 0-.914l2.5-3.25a.75.75 0 0 1 1.051-.137m10.449 6.637a.75.75 0 1 0 1.188.914l2.5-3.25a.75.75 0 0 0 0-.914l-2.5-3.25a.75.75 0 1 0-1.188.914L17.304 10zM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="lsxqr6bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:virtual-network-20-filled"} {...others} />);
}

export default Component;
