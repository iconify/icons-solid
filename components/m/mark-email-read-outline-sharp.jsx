import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l8lkdj5vf {
  fill: currentColor;
  d: path("m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM12 11l8-5H4zm0 2L4 8v10h5.15l2 2H2V4h20v6.35l-2 2V8zm0 0");
}
</style><path class="l8lkdj5vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-email-read-outline-sharp"} {...others} />);
}

export default Component;
