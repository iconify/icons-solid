import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wog09xrky {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-16 136a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z");
}
</style><path class="wog09xrky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pause-circle-fill"} {...others} />);
}

export default Component;
