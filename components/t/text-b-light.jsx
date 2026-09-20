import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zqnrnfhzl {
  fill: currentColor;
  d: path("M174.69 116.41A42 42 0 0 0 148 42H80a6 6 0 0 0-6 6v152a6 6 0 0 0 6 6h80a46 46 0 0 0 14.69-89.59M86 54h62a30 30 0 0 1 0 60H86Zm74 140H86v-68h74a34 34 0 0 1 0 68");
}
</style><path class="zqnrnfhzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-b-light"} {...others} />);
}

export default Component;
