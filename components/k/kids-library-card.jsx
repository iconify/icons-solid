import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.i19kjlbwl {
  d: path("M8.75 9.75C7.75 9 6.5 9 5.5 9.5v6c1-.5 2.25-.5 3.25.25C9.75 15 11 15 12 15.5v-6c-1-.5-2.25-.5-3.25.25Zm0 0v6M15 10.5h3.5M15 14h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="i19kjlbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kids-library-card"} {...others} />);
}

export default Component;
