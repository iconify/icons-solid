import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sa6pubb4r {
  fill: currentColor;
  d: path("M8 5v6h7a1 1 0 0 1 0 2H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2Z");
}
</style><path class="sa6pubb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-f-bulk-round"} {...others} />);
}

export default Component;
