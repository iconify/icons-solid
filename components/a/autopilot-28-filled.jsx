import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.r69gh_bsl {
  fill: currentColor;
  d: path("M22.74 3c3.933 0 5.756 4.884 2.784 7.46L15.49 19.163a4 4 0 0 1-.383.382L13.171 21.2a1 1 0 0 1-.132.09l-4.594 3.984a2.975 2.975 0 0 1-4.5-3.775l5.524-9.231l-5.913-3.43A3.13 3.13 0 0 1 5.126 3zM5.23 22.269a1.474 1.474 0 0 0 2.232 1.87l6.962-6.038a2.168 2.168 0 0 0-.577-3.198l-3.09-1.87zM5.127 4.5a1.63 1.63 0 0 0-.818 3.04l5.959 3.456l1.409-2.317C12.79 6.846 11.472 4.5 9.327 4.5z");
}
</style><path class="r69gh_bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:autopilot-28-filled"} {...others} />);
}

export default Component;
