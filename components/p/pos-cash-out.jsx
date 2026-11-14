import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ytmhmy8ki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h10V9H3ZM8 9v1.5m6.1 4H4v-4h16v1.2m-4.8 9.8H2.5v-4h8.6m10.4 3.4v.6h-.7M4 14.5l-1.5 3m5-5h.01m4.49 0h.01m-5.51 7h4m7.5 2v-7m-3 3l3-3l3 3");
}
</style><path class="ytmhmy8ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pos-cash-out"} {...others} />);
}

export default Component;
