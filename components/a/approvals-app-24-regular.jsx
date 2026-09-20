import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.grr9ygbsf {
  fill: currentColor;
  d: path("M11.78 1.72a.75.75 0 1 0-1.06 1.06L11.94 4a9 9 0 1 0 9.023 9.82a.75.75 0 0 0-1.494-.135A7.5 7.5 0 1 1 11.94 5.5l-1.22 1.22a.75.75 0 0 0 1.061 1.06l2.5-2.5a.75.75 0 0 0 0-1.06zm4.004 8.5a.75.75 0 0 1 0 1.06l-4.504 4.504a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.469l3.973-3.973a.75.75 0 0 1 1.06 0");
}
</style><path class="grr9ygbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:approvals-app-24-regular"} {...others} />);
}

export default Component;
