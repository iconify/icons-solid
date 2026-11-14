import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjv9xmb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19v3h-19Zm2.5 3v11m14-11v11m-7-11V13m-2.5 2.5L12 13l2.5 2.5v5h-5Zm2.5.25h.01M6 3h6v4.5H6Z");
}
</style><path class="bjv9xmb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tagging-table"} {...others} />);
}

export default Component;
