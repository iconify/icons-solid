import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.absn4jb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12L14 9l1.75-1l-3 5l-.75 2l-.75-2l-3-5L10 9Zm6 15.25l-1.25 1.75a1.5 1.5 0 1 0 2.5 0Z");
}
</style><path class="absn4jb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:insect-sting"} {...others} />);
}

export default Component;
