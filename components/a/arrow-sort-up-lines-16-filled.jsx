import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.f_k38ub-k {
  fill: currentColor;
  d: path("M13 14.25a.75.75 0 0 1-1.5 0V3.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L13 3.56zM2.75 13.5a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zm2-3a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5zM6 6.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75");
}
</style><path class="f_k38ub-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sort-up-lines-16-filled"} {...others} />);
}

export default Component;
