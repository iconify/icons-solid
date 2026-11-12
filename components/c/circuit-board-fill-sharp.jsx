import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx4an3bse {
  fill: currentColor;
  d: path("M16 2v6h-4.171a3 3 0 1 0 0 2H17a1 1 0 0 0 1-1V2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8v-6h4.171a3 3 0 1 0 0-2H7a1 1 0 0 0-1 1v7H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}
</style><path class="qx4an3bse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circuit-board-fill-sharp"} {...others} />);
}

export default Component;
