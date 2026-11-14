import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-gmab-6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5h17c0 4-3.5 6-8.5 6s-8.5-2-8.5-6m2 0C7 8 10 5.5 12 5.5s5 2.5 6.5 7m1-4.5h.01m1.99 2.5h.01");
}
</style><path class="n-gmab-6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carbon-black"} {...others} />);
}

export default Component;
