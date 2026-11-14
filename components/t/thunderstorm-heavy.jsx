import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ht2gx-bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12.5h10a3.5 3.5 0 0 0 0-7a5 5 0 0 0-9 1a3.25 3.25 0 0 0-1 6m6.5 0L11 16.25h3l-2.5 4.25m-4-5L6 19m12.5-3.5L17 19");
}
</style><path class="ht2gx-bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thunderstorm-heavy"} {...others} />);
}

export default Component;
