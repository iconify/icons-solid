import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wv_yjtg1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.5h5v5h-5zM7 7l3 3m7-3l-3 3m-7 7l3-3m7 3l-3-3M2.75 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-13.5 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="wv_yjtg1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drone-sharp"} {...others} />);
}

export default Component;
