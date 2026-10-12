import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itk2dqbfe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.91 15.93l2.399-1.475l1.561-2.535m.38-4.67v-3h3v3");
}

.nyekn7bmo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.25 7.25h3C21.5 15 16.5 21.25 7.5 19.5l-1.6-.291v-3.184L7 15.75c3.25-2.25 6.5-5 10.25-8.5Z");
}

.uld2jcc5q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.25 17.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nyekn7bmo"/><path class="itk2dqbfe"/><path class="uld2jcc5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:banana-sharp"} {...others} />);
}

export default Component;
