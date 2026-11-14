import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3kumj6fv {
  d: path("M7 11h10v10.5H7Z");
}

.colysyu2e {
  d: path("M9.75 14h4.5v3.5h-4.5Zm.242-5.867a3.5 3.5 0 0 1 4.016 0M8.415 5.88a6.25 6.25 0 0 1 7.17 0M6.838 3.628a9 9 0 0 1 10.324 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3kumj6fv"/><path class="colysyu2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contactless-gate"} {...others} />);
}

export default Component;
