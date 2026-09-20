import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.m93ast6nk {
  fill: currentColor;
  d: path("M5.702 3.282C5.069 2.659 4 3.107 4 3.994v4.012c0 .887 1.07 1.335 1.702.713l2.037-2.006a1 1 0 0 0 0-1.425z");
}
</style><path class="m93ast6nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-right-12-filled"} {...others} />);
}

export default Component;
