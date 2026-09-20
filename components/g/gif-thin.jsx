import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.q5zqfmbkk {
  fill: currentColor;
  d: path("M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m92-4h-56a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h44a4 4 0 0 0 0-8h-44V76h52a4 4 0 0 0 0-8M96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4");
}
</style><path class="q5zqfmbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gif-thin"} {...others} />);
}

export default Component;
