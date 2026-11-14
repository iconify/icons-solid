import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uyxb99fzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c5 0 6-10 9.5-10s4.5 10 9.5 10m-5-10V12m0 2.5V16m0 2.5v2m-2-16a2 2 0 1 1 3 1.75c-.75.5-1 .75-1 1.5m0 2h.01");
}
</style><path class="uyxb99fzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hypothesis-test"} {...others} />);
}

export default Component;
