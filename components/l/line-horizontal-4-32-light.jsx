import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.fjtjqhb_b {
  fill: currentColor;
  d: path("M29.5 26a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-27a.5.5 0 0 1 0-1z");
}
</style><path class="fjtjqhb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-32-light"} {...others} />);
}

export default Component;
