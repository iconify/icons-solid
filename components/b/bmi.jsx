import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i8lp-i-mm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 19h15.5A1.25 1.25 0 0 1 21 20.25a1.25 1.25 0 0 1-1.25 1.25H4.25A1.25 1.25 0 0 1 3 20.25A1.25 1.25 0 0 1 4.25 19M12 8.25h1.75c1.25 0 2 .25 2.5 1.25l1.5 2.5c.5.75-.25 1.5-1 1.5c-.5 0-1-.5-1.25-1l-1-1.25L15 13l.5 4c.25.5 0 1-.75 1h-1c-.25 0-.75-.25-.75-.75L12.5 14c0-.5-1-.5-1 0l-.5 3.25c0 .5-.5.75-.75.75h-1c-.75 0-1-.5-.75-1l.5-4l.5-1.75l-1 1.25c-.25.5-.75 1-1.25 1c-.75 0-1.5-.75-1-1.5l1.5-2.5c.5-1 1.25-1.25 2.5-1.25ZM10.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="i8lp-i-mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bmi"} {...others} />);
}

export default Component;
