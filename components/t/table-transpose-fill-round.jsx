import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tng9kfbzx {
  fill: currentColor;
  d: path("M13 2h6a3 3 0 1 1 0 6h-6a3 3 0 1 1 0-6M8 13v6a3 3 0 1 1-6 0v-6a3 3 0 1 1 6 0m7 2v1.586l4.293-4.293a.999.999 0 1 1 1.414 1.414L16.414 18H18a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0");
}
</style><path class="tng9kfbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-transpose-fill-round"} {...others} />);
}

export default Component;
