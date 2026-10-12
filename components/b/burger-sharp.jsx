import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9e079cmc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 7h.01m4.99 0h.01");
}

.pit_b0lef {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10a8 6.5 0 0 1 16 0v1H4zm-.25 4.25c1.4 0 1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1s1.4-1 2.75-1s1.4 1 2.75 1M4 17.25h16v4H4z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pit_b0lef"/><path class="b9e079cmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:burger-sharp"} {...others} />);
}

export default Component;
