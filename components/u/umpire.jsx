import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzpwo9bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 8h-13a4.5 4.5 0 0 1 9 0M8 8v1.5a4 4 0 0 0 8 0V8M4.5 21.5C4.5 19 7.75 17 12 17s7.5 2 7.5 4.5");
}
</style><path class="hzpwo9bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:umpire"} {...others} />);
}

export default Component;
