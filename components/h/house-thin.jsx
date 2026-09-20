import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pjak0ac5q {
  fill: currentColor;
  d: path("m216.49 111.51l-80-80a12 12 0 0 0-17 0l-80 80A12 12 0 0 0 36 120v96a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-60h40v60a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-96a12 12 0 0 0-3.51-8.49M212 212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44v-92a4 4 0 0 1 1.17-2.83l80-80a4 4 0 0 1 5.66 0l80 80A4 4 0 0 1 212 120Z");
}
</style><path class="pjak0ac5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:house-thin"} {...others} />);
}

export default Component;
