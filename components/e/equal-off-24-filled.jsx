import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drsjmy_3h {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H4a1 1 0 0 0 0 2h4.94l4 4H4a1 1 0 1 0 0 2h10.94l5.78 5.78a.75.75 0 0 0 1.06-1.06zM20 14h-2.818l2 2H20a1 1 0 1 0 0-2m-8.818-6l2 2H20a1 1 0 1 0 0-2z");
}
</style><path class="drsjmy_3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:equal-off-24-filled"} {...others} />);
}

export default Component;
