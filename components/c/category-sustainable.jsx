import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i43_nybrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14c-5.5 0-8.5-2.5-8.5-7.5C9 6.5 12 9 12 14m0-3c0-5 3-8 8.5-8c0 5.5-3 8-8.5 8m0 3v3m-8 4c1.5-3.25 4.5-4 8-4s6.5.75 8 4Z");
}
</style><path class="i43_nybrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-sustainable"} {...others} />);
}

export default Component;
