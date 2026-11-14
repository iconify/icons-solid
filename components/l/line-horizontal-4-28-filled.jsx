import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ubat_lb1v {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z");
}
</style><path class="ubat_lb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-28-filled"} {...others} />);
}

export default Component;
