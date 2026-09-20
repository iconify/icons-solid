import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.jqf-ye_eb {
  fill: currentColor;
  d: path("M9.667 2a1.333 1.333 0 0 1 1.23 1.846l-2.18 5.231A1.5 1.5 0 0 1 7.334 10h-5a1.333 1.333 0 0 1-1.23-1.846l2.18-5.231A1.5 1.5 0 0 1 4.666 2z");
}
</style><path class="jqf-ye_eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rhombus-12-filled"} {...others} />);
}

export default Component;
