import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzlxymboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 20.4v1.1H2.5v-9H13v3.1M3.5 4L10 3l1.5 7l-7 .75ZM13 14.5h1.1m.8 0h3.6m0 0v-10m-1.5-2h3V5h-3Zm-12.5 13H11m3.5 2.5l2.5 2.5l4.5-5");
}
</style><path class="fzlxymboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:self-checkout-approval"} {...others} />);
}

export default Component;
