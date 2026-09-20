import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lsljtnb9n {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM3 6v4h2V6zm10-1v-.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5V5zM6 6v4h4V6zm5 0v4h2V6zm-1 7v-2H6v2zm-5 0v-2H3v.5A1.5 1.5 0 0 0 4.5 13zm6 0h.5a1.5 1.5 0 0 0 1.5-1.5V11h-2z");
}
</style><path class="lsljtnb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-freeze-row-16-regular"} {...others} />);
}

export default Component;
