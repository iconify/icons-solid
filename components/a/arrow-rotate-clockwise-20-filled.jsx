import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fl_kt7bgr {
  fill: currentColor;
  d: path("M10 2.5A7.5 7.5 0 0 1 14.497 16h1.753a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.621A6 6 0 1 0 4 10a.75.75 0 0 1-1.5 0A7.5 7.5 0 0 1 10 2.5m0 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M10 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="fl_kt7bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-rotate-clockwise-20-filled"} {...others} />);
}

export default Component;
