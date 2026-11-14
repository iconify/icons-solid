import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxd1zvbyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 13V5.5a3.5 3.5 0 0 0-7 0v4L6.75 7A2 2 0 0 0 4 9.75L7.25 13m2.039 3h6.922a1.75 1.75 0 0 1 1.536.912l1.091 2a1.75 1.75 0 0 1-1.536 2.588H8.198a1.75 1.75 0 0 1-1.536-2.588l1.091-2A1.75 1.75 0 0 1 9.289 16m-.039-3h7a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="uxd1zvbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fencing-glove"} {...others} />);
}

export default Component;
