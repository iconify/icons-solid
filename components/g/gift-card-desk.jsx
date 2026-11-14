import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2mv00vvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.1 12.5H2.5V10h19v2.5h-.1m-9 8H3.5v-8h11.6m-3.1 0v8m3.25-4.5h6.25v5.5h-6.25Zm3 0v5.5m0-5.5c-.75-1.5-2-1.5-1.75-.75s1 .75 1.75.75Zm0 0c.75-1.5 2-1.5 1.75-.75s-1 .75-1.75.75Z");
}
</style><path class="g2mv00vvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gift-card-desk"} {...others} />);
}

export default Component;
