import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pte1w6bwp {
  fill: currentColor;
  d: path("M204 96a4 4 0 0 1-4 4h-68v116a4 4 0 0 1-8 0V100H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M56 60h144a4 4 0 0 0 0-8H56a4 4 0 0 0 0 8");
}
</style><path class="pte1w6bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-kzt-thin"} {...others} />);
}

export default Component;
