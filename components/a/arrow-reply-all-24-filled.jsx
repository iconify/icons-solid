import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jl452_b8g {
  fill: currentColor;
  d: path("M9.707 5.293a1 1 0 0 1 0 1.414L5.414 11l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0m5 0a1 1 0 0 1 0 1.414L11.414 10H13a8 8 0 0 1 8 8a1 1 0 1 1-2 0a6 6 0 0 0-6-6h-1.586l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0");
}
</style><path class="jl452_b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-all-24-filled"} {...others} />);
}

export default Component;
