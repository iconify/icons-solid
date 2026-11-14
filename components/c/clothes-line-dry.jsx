import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9tayqlct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18.5M21 3v18.5M3 5.5h18m-11.5 0L6 8.25l1.5 2.5l1.5-1v8.75h6V9.75l1.5 1l1.5-2.5l-3.5-2.75c-1 1.5-4 1.5-5 0");
}
</style><path class="f9tayqlct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clothes-line-dry"} {...others} />);
}

export default Component;
