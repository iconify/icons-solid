import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqi3c0bnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.344 20.5H3.5v-10L12 3.25l8.5 7.25v.956m1 5.044a2.25 2.25 0 1 1-2.25-2.25M17.75 18l-3.25 3.25");
}
</style><path class="fqi3c0bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cause-disaster-recovery"} {...others} />);
}

export default Component;
