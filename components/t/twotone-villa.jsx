import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4g9bnbwd {
  fill: currentColor;
  d: path("m5 9.37l9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ghk06fbfp {
  fill: currentColor;
  d: path("M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2M5 9.37l9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z");
}
</style><path class="c4g9bnbwd"/><path class="ghk06fbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-villa"} {...others} />);
}

export default Component;
