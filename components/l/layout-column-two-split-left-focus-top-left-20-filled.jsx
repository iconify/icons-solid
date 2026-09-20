import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.w9hob-y4j {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.5 4H4v4a2 2 0 0 0 2 2h3.5zm4.5 6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.5v12z");
}
</style><path class="w9hob-y4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-two-split-left-focus-top-left-20-filled"} {...others} />);
}

export default Component;
