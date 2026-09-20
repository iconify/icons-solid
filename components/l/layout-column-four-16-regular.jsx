import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nswsbjb_y {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3v10A1.5 1.5 0 0 1 3 11.5zM8.5 13V3h2v10zm-1 0h-2V3h2zm5.5-1.5a1.5 1.5 0 0 1-1.5 1.5V3A1.5 1.5 0 0 1 13 4.5z");
}
</style><path class="nswsbjb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-four-16-regular"} {...others} />);
}

export default Component;
