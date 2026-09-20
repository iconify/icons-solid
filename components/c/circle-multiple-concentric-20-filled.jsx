import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.w-g_csl8m {
  fill: currentColor;
  d: path("M3.5 10a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-3.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="w-g_csl8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-multiple-concentric-20-filled"} {...others} />);
}

export default Component;
