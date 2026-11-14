import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqegsspsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.464 11L11 7.464L14.536 11L11 14.536Zm5.657-6.364l2.475-2.475l4.243 4.243l-2.475 2.475Zm-10.96 10.96l2.475-2.475l4.243 4.243l-2.475 2.475Zm10.607-6.364l2.475-2.475m-8.486 8.486l2.475-2.475M16.25 18.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18.5 15v7M15 18.5h7");
}
</style><path class="kqegsspsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:satellite-tracking"} {...others} />);
}

export default Component;
