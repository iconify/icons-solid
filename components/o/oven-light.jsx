import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ofwgggbny {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM74 76a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m22 30H72a6 6 0 0 0-6 6v72a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 72H78v-60h100Z");
}
</style><path class="ofwgggbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:oven-light"} {...others} />);
}

export default Component;
