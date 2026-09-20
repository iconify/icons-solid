import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jyehmctwu {
  fill: currentColor;
  d: path("m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM2 20V4h20v6.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20zm10-7l8-5V6l-8 5l-8-5v2z");
}
</style><path class="jyehmctwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-email-read-sharp"} {...others} />);
}

export default Component;
