import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g9-0ycb5f {
  fill: currentColor;
  d: path("M227.7 134.47A4 4 0 0 0 224 132h-44V72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34L41.66 140H80a4 4 0 0 0 4-4V76h88v60a4 4 0 0 0 4 4h38.34ZM76 40a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4");
}
</style><path class="g9-0ycb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-line-down-thin"} {...others} />);
}

export default Component;
