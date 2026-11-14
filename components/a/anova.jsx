import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h96z1abos {
  d: path("M2.5 19.5C5.25 19.5 6.5 6 8 6s2.75 13.5 5.5 13.5");
}

.l2bd0lb6o {
  d: path("M6.5 19.5c2.75 0 4-9.5 5.5-9.5s2.75 9.5 5.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynp6q9bkm {
  d: path("M10.5 19.5c2.75 0 4-15 5.5-15s2.75 15 5.5 15m-19 1h19");
}
</style><g class="ulnmmdpxh"><path class="h96z1abos"/><path class="l2bd0lb6o"/><path class="ynp6q9bkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anova"} {...others} />);
}

export default Component;
