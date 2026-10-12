import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8izl96sw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 14h11v1.75a5.5 5.5 0 0 1-11 0Zm4-3h-4v-.25l.002-4.023L8.75 6.28Zm3 0h4v-.25l-.002-4.023l-3.998-.447Zm6.55-2.82l1.17-.42M15 4.25l.63-1.08");
}
</style><path class="h8izl96sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:right-click-sharp"} {...others} />);
}

export default Component;
