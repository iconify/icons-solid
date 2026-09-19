import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zev-vkbqo {
  fill: currentColor;
  d: path("M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5zM4 5v3h6v2.5H4v3h6V16H4v3h9V5z");
}
</style><path class="zev-vkbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-timer-3-select"} {...others} />);
}

export default Component;
