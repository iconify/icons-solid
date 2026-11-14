import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vas96_brn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 2.5H19v12.6m-2.663 5.175L14.5 21.5L12 20l-2.5 1.5L7.25 20L5 21.5V8.948M10.4 6.5h5.1M13.9 10h1.6m-7 3.5h1.1m-6.1-10l17 17");
}
</style><path class="vas96_brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-receipt-no"} {...others} />);
}

export default Component;
