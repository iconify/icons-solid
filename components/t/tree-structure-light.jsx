import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s-63p8bti {
  fill: currentColor;
  d: path("M160 110h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a22 22 0 0 0-22 22v34H70v-10a14 14 0 0 0-14-14H24a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-10h36v34a22 22 0 0 0 22 22h18v18a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a10 10 0 0 1-10-10V88a10 10 0 0 1 10-10h18v18a14 14 0 0 0 14 14M58 144a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Zm100 16a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Zm0-112a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Z");
}
</style><path class="s-63p8bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tree-structure-light"} {...others} />);
}

export default Component;
