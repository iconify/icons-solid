import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4r7wdbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25h9l-1.25 7.25h-6.5ZM11 18.5h2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 20a1.5 1.5 0 0 1 1.5-1.5m-1.5-10a2.5 2.5 0 0 1 5 0M12 3.25V2m4.5 3.75L17.75 5M7.5 5.75L6.25 5");
}
</style><path class="y4r7wdbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:self-tanner"} {...others} />);
}

export default Component;
