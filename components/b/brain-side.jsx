import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prkr2ccod {
  d: path("M13.5 21v-3.5h-6c-3 0-5-2.25-5-5.5c0-4.75 4-8 9-8c5.5 0 10 3.25 10 7.5c0 3.25-2.25 6-5 6V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vov89fb0r {
  d: path("M6.5 10.5c2.5-3 4.5 2.5 7 0c1.5-1.5 3-1 4 .5");
}
</style><g class="ulnmmdpxh"><path class="prkr2ccod"/><path class="vov89fb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:brain-side"} {...others} />);
}

export default Component;
