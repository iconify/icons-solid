import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jyg8i5btb {
  fill: currentColor;
  d: path("M11.78 3.53L8.53 6.78a.75.75 0 0 1-1.06 0L4.22 3.53a.75.75 0 0 1 1.06-1.06L8 5.19l2.72-2.72a.75.75 0 1 1 1.06 1.06M8.53 9.22a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 1 0 1.06 1.06L8 10.81l2.72 2.72a.75.75 0 1 0 1.06-1.06z");
}
</style><path class="jyg8i5btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-down-up-16-filled"} {...others} />);
}

export default Component;
