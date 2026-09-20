import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xju_kyb2e {
  fill: currentColor;
  d: path("M16.255 2.195a.75.75 0 0 0-1.01 1.11l2.75 2.5a.75.75 0 0 0 1.01 0l2.75-2.5a.75.75 0 1 0-1.01-1.11L18.5 4.236zM12 4a.75.75 0 0 1 .697.474l5.75 14.5a.75.75 0 0 1-1.394.552L15.258 15H8.742l-1.795 4.526a.75.75 0 1 1-1.394-.553l5.75-14.5A.75.75 0 0 1 12 4m0 2.785L9.337 13.5h5.326z");
}
</style><path class="xju_kyb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:font-decrease-24-regular"} {...others} />);
}

export default Component;
