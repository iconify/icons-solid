import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.mg9f9k5er {
  fill: currentColor;
  d: path("M8.25 2.5a.75.75 0 0 1 0 1.5H5.06L12 10.94V7.75a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h3.19L4 5.06v3.19a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75z");
}
</style><path class="mg9f9k5er"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-top-left-bottom-right-16-filled"} {...others} />);
}

export default Component;
