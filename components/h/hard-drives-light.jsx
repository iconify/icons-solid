import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p2t4-ible {
  fill: currentColor;
  d: path("M208 138H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-158H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-20-24a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 96a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="p2t4-ible"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hard-drives-light"} {...others} />);
}

export default Component;
