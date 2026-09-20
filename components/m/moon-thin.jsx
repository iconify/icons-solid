import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gboy5zbvg {
  fill: currentColor;
  d: path("M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5a100.78 100.78 0 0 0-50.86 35.61a100 100 0 0 0 140 140a100.78 100.78 0 0 0 35.59-50.87a4 4 0 0 0-.95-3.95m-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35a100.09 100.09 0 0 0 119.3 119.3a93 93 0 0 1-30.35 39.88");
}
</style><path class="gboy5zbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:moon-thin"} {...others} />);
}

export default Component;
