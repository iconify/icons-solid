import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tnri-abwu {
  fill: currentColor;
  d: path("m216.49 136.49l-80 80a12 12 0 1 1-17-17l80-80a12 12 0 1 1 17 17m-16-105a12 12 0 0 0-17 0l-152 152a12 12 0 0 0 17 17l152-152a12 12 0 0 0 0-16.98Z");
}
</style><path class="tnri-abwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notches-bold"} {...others} />);
}

export default Component;
