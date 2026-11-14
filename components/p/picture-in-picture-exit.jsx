import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}

.xr9g6gq0m {
  d: path("M12 11.5h6.5v5H12ZM9.5 10L7 7.5M7 10V7.5h2.5");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="xr9g6gq0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:picture-in-picture-exit"} {...others} />);
}

export default Component;
