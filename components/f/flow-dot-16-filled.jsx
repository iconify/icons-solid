import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.h6niyu1wm {
  fill: currentColor;
  d: path("M3.5 2.25c.555 0 1.038.302 1.298.75h6.452a2.75 2.75 0 1 1 0 5.5h-6.5a1.25 1.25 0 1 0 0 2.5h6.452a1.498 1.498 0 0 1 2.798.75a1.5 1.5 0 0 1-2.798.75H4.75a2.75 2.75 0 1 1 0-5.5h6.5a1.25 1.25 0 1 0 0-2.5H4.798A1.498 1.498 0 0 1 2 3.75a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="h6niyu1wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flow-dot-16-filled"} {...others} />);
}

export default Component;
