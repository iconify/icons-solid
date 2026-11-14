import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5uktwbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h13l-2 7.5h-9Zm-2 7.5H18v3h3.5M11 11V7m0 2.5c-3 0-5.5-2-5.5-5c3 0 5.5 2 5.5 5ZM11 7c0-2.5 2.5-4.5 5.5-4.5C16.5 5 14 7 11 7Z");
}
</style><path class="m5uktwbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:planter-street"} {...others} />);
}

export default Component;
