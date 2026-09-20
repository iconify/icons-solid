import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvuhk_boo {
  fill: currentColor;
  d: path("M9.5 21H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zm0-6.5H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zM8 9.5v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM9.5 8H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9.5zM8 3v5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 13v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z");
}
</style><path class="pvuhk_boo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:list-bar-24-filled"} {...others} />);
}

export default Component;
