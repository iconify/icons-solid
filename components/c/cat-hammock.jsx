import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwuqhybtp {
  d: path("M2.5 20.5L5 3.5h14l2.5 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybakmwbam {
  d: path("M7.5 11c2 6 7 6 9 0c-2 2.5-7 2.5-9 0ZM7 3.5l.5 7.5M17 3.5l-.5 7.5");
}
</style><g class="ulnmmdpxh"><path class="gwuqhybtp"/><path class="ybakmwbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cat-hammock"} {...others} />);
}

export default Component;
