import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2b5n5bdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C2.5 6.25 5.75 3 10 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H17v1.536m-4 4.44V21.5m1.75-3.5l2 2L21 15.75");
}
</style><path class="h2b5n5bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:head-check"} {...others} />);
}

export default Component;
