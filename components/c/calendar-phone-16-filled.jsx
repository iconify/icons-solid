import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.m5zoidwuh {
  fill: currentColor;
  d: path("M8 14H4.5A2.5 2.5 0 0 1 2 11.5V6h8.75A2.75 2.75 0 0 0 8 8.75zm6-9.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zM9 8.75C9 7.784 9.784 7 10.75 7h2.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 13.25 16h-2.5A1.75 1.75 0 0 1 9 14.25zM11.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="m5zoidwuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-phone-16-filled"} {...others} />);
}

export default Component;
