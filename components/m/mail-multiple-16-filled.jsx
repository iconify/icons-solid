import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jrq8bnsic {
  fill: currentColor;
  d: path("M1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.201L7 7.432l-6-3.23zm6.237 4.44L13 5.337V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.337L6.763 8.44a.5.5 0 0 0 .474 0M5 14a2 2 0 0 1-1.732-1H11a3 3 0 0 0 3-3V4.268A2 2 0 0 1 15 6v4a4 4 0 0 1-4 4z");
}
</style><path class="jrq8bnsic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-multiple-16-filled"} {...others} />);
}

export default Component;
