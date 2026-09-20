import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gnp-zgb1x {
  fill: currentColor;
  d: path("M15 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M9 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M4 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-7-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="gnp-zgb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-dots-horizontal-20-regular"} {...others} />);
}

export default Component;
