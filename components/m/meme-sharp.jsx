import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4e08zb4z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 13.5l2.75-2.75l2 2l2.25-2.25l3 3");
}

.hqze38a6p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 6.75h9");
}

.qfnbw8big {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17.25h10");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="hqze38a6p"/><path class="h4e08zb4z"/><path class="qfnbw8big"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:meme-sharp"} {...others} />);
}

export default Component;
