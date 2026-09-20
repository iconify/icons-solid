import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.uerf48buv {
  fill: currentColor;
  d: path("M16.028 4.397a8.185 8.185 0 1 1 11.575 11.576L15.06 28.515a5.064 5.064 0 1 1-7.161-7.161l11.14-11.142a1.25 1.25 0 1 1 1.769 1.768L9.665 23.12a2.564 2.564 0 0 0 3.627 3.627l12.543-12.543a5.685 5.685 0 1 0-8.04-8.04L4.135 19.827a1.25 1.25 0 1 1-1.768-1.768z");
}
</style><path class="uerf48buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:attach-32-filled"} {...others} />);
}

export default Component;
