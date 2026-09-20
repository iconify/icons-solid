import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wrncz7bon {
  fill: currentColor;
  d: path("M166.7 116.4A42 42 0 0 0 140 42H64a6.2 6.2 0 0 0-6 6v152a6 6 0 0 0 6 6h88a46 46 0 0 0 14.7-89.6ZM70 54h70a30 30 0 0 1 0 60H70Zm82 140H70v-68h82a34 34 0 0 1 0 68Z");
}
</style><path class="wrncz7bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-bolder-light"} {...others} />);
}

export default Component;
