import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i0k2btb9a {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 160v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 17 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12");
}
</style><path class="i0k2btb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-square-down-left-bold"} {...others} />);
}

export default Component;
