import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzq9p4bxj {
  fill: currentColor;
  d: path("M16 2v3a3 3 0 0 1-3 3h-1.171a3 3 0 1 0 0 2H13a5 5 0 0 0 5-5V2.099A5.01 5.01 0 0 1 22 7v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H8v-3a3 3 0 0 1 3-3h1.171a3 3 0 1 0 0-2H11a5 5 0 0 0-5 5v2.901A5.01 5.01 0 0 1 2 17V7a5 5 0 0 1 5-5Z");
}
</style><path class="vzq9p4bxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circuit-board-fill-round"} {...others} />);
}

export default Component;
