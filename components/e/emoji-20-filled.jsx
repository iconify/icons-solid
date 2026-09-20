import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.mo1wa8t-l {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-6.5-1.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m.389 4.015A4 4 0 0 0 10 14a4 4 0 0 0 3.111-1.485a.5.5 0 1 1 .778.629A5 5 0 0 1 10 15a5 5 0 0 1-3.889-1.856a.5.5 0 1 1 .778-.63");
}
</style><path class="mo1wa8t-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-20-filled"} {...others} />);
}

export default Component;
