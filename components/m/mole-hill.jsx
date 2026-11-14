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

.v7qfplb6m {
  d: path("M6.75 13.5h.01m10.49-.25h.01");
}

.wa74hkb7l {
  d: path("M3 17c1-5 3.5-7.5 6-7.5c1-2.5 5-3 6.5-.5c3 .5 5 4 5.5 8M2.5 17h19");
}

.wt_yqhnrl {
  fill: currentColor;
  d: path("M9.75 17a2.25 2.25 0 0 1 4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="wa74hkb7l"/><path class="wt_yqhnrl"/><path class="v7qfplb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mole-hill"} {...others} />);
}

export default Component;
