import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.smtigjq2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h10v9q0 4-4 4h-2q-4 0-4-4Zm10 3h1a2.5 2.5 0 0 1 0 5h-1m-14 5h19Q20 20.5 12 20.5T2.5 17");
}
</style><path class="smtigjq2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:for-here-mug"} {...others} />);
}

export default Component;
