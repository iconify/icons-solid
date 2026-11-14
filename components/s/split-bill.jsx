import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrn7rmb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h7V21l-1.75-1.25L6.5 21l-1.75-1.25L3 21Zm11 0h7V21l-1.75-1.25L17.5 21l-1.75-1.25L14 21Zm-8.5 5h2m9 0h2");
}
</style><path class="vrn7rmb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:split-bill"} {...others} />);
}

export default Component;
