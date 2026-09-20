import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dto-zvwql {
  fill: currentColor;
  d: path("M212 128v80a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h80a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4v-80a4 4 0 0 1 8 0m16-68a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-8 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24");
}
</style><path class="dto-zvwql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notification-thin"} {...others} />);
}

export default Component;
