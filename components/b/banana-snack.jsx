import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s5kjhkbie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9c1 6 6 10.5 12.5 10c2.5-.25 4-1.5 4-2.5c-3.5.5-8.5-1-11.5-5C7.5 9.5 7 7 7 5H5c-.75 1-1.25 2.5-1 4m1-5.5h2");
}
</style><path class="s5kjhkbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:banana-snack"} {...others} />);
}

export default Component;
