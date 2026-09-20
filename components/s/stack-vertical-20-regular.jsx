import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.otd-qwbun {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v11a.5.5 0 0 1-1 0v-3a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 13.5v3a.5.5 0 0 1-1 0zm1 6a2.5 2.5 0 0 1 1.5-.5h9a2.5 2.5 0 0 1 1.5.5v-2A1.5 1.5 0 0 0 14.5 8h-9A1.5 1.5 0 0 0 4 9.5zm12-6A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v2c.418-.314.937-.5 1.5-.5h9c.563 0 1.082.186 1.5.5z");
}
</style><path class="otd-qwbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:stack-vertical-20-regular"} {...others} />);
}

export default Component;
