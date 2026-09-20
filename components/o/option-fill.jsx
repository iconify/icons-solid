import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.moalb7bxu {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136h-47.06a15.92 15.92 0 0 1-14.31-8.84L103.06 96H56a8 8 0 0 1 0-16h47.06a15.92 15.92 0 0 1 14.31 8.84L152.94 160H200a8 8 0 0 1 0 16m0-80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="moalb7bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:option-fill"} {...others} />);
}

export default Component;
