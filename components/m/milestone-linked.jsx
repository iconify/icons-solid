import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emqwrq_ut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18M4 3h6.5L9 5.75l1.5 2.75H4m9.5.5v12m0-12H20l-1.5 2.75L20 14.5h-6.5m-9.5 3h9.5");
}
</style><path class="emqwrq_ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:milestone-linked"} {...others} />);
}

export default Component;
