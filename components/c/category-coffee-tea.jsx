import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zi5wf_bso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 1.5h1.5a2.5 2.5 0 0 1 0 5H16m-8-12V6m4-2.5V6");
}
</style><path class="zi5wf_bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-coffee-tea"} {...others} />);
}

export default Component;
