import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkjbcxa_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1.75 15.75v-4h-2L9.5 12h5l1.25 5.5h-2v4M6.25 16l3-3m5.5 0l3 3");
}
</style><path class="gkjbcxa_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:toddler"} {...others} />);
}

export default Component;
