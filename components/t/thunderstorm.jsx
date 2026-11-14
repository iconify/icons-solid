import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6r-9pbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5a4.25 4.25 0 0 1 .5-8a5 5 0 0 1 9 .75a3.75 3.75 0 0 1 1 7.25Zm6 0L10.5 18h3L11 21.5m-4-4.25l-1 3m11.5-3l-1 3");
}
</style><path class="u6r-9pbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thunderstorm"} {...others} />);
}

export default Component;
