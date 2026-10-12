import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.choh5ysps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 7.25a3.25 3.25 0 0 1 6.5 0Zm-4.5 0h15.5l-1.5 12.25l-.222 1.764l-1.778-.014h-8.5l-1.778.014L5.75 19.5Zm1 3.25h13.5");
}
</style><path class="choh5ysps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wastebasket-sharp"} {...others} />);
}

export default Component;
