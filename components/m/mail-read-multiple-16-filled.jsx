import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qqp4bieav {
  fill: currentColor;
  d: path("M7.24 1.061a.5.5 0 0 0-.48 0L1.7 3.821c-.202.11-.367.267-.487.453L7 7.43l5.787-3.156a1.34 1.34 0 0 0-.487-.452zM1 10V5.297l5.76 3.142a.5.5 0 0 0 .48 0L13 5.297V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2m2.268 3A2 2 0 0 0 5 14h6a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V10a3 3 0 0 1-3 3z");
}
</style><path class="qqp4bieav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-read-multiple-16-filled"} {...others} />);
}

export default Component;
