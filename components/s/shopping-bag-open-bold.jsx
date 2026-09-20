import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h7-m5g9dp {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v16H44V60ZM44 196v-96h168v96Zm136-72a52 52 0 0 1-104 0a12 12 0 0 1 24 0a28 28 0 0 0 56 0a12 12 0 0 1 24 0");
}
</style><path class="h7-m5g9dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:shopping-bag-open-bold"} {...others} />);
}

export default Component;
