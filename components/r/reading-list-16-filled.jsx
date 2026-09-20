import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tscr8mb0l {
  fill: currentColor;
  d: path("M3.5 4.386a.614.614 0 0 1 1.126-.34a.75.75 0 0 0 1.248-.833A2.113 2.113 0 0 0 2 4.386c0 1.073.799 1.959 1.834 2.096A1 1 0 0 0 4 6.5h7.31a.75.75 0 0 0 0-1.5H4.114a.614.614 0 0 1-.614-.614M7.75 2.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-3 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM2 10.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m2.745 1.751a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5z");
}
</style><path class="tscr8mb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:reading-list-16-filled"} {...others} />);
}

export default Component;
