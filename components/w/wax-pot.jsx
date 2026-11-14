import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eeqkn1tyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16V15c0 3.3-2.7 5.5-6 5.5h-4c-3.3 0-6-2.2-6-5.5ZM8 8C7 6.5 9 5.5 8 4m4 4c-1-1.5 1-2.5 0-4m4 4c-1-1.5 1-2.5 0-4");
}
</style><path class="eeqkn1tyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wax-pot"} {...others} />);
}

export default Component;
