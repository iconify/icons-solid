import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n0bwlbcqh {
  fill: currentColor;
  d: path("M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m104 56H40a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m88 0h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8");
}
</style><path class="n0bwlbcqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:list-plus-thin"} {...others} />);
}

export default Component;
