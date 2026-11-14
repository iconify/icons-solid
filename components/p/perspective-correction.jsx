import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7sz0bm1r {
  d: path("M3 20.5h18l-3.5-17h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4j8rst2q {
  d: path("M9 7h6v10.5H9Z");
}
</style><g class="ulnmmdpxh"><path class="c7sz0bm1r"/><path class="x4j8rst2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:perspective-correction"} {...others} />);
}

export default Component;
