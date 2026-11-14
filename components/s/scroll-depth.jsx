import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bawx2v-qa {
  d: path("M3.5 2.5h17v19h-17Zm0 4.5h17m-14-2.25h.01m2.74 0h.01");
}

.br-zlicuw {
  fill: currentColor;
  d: path("M16.25 14H18v5h-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us8_ccnut {
  d: path("M10 10v7.5m-2.75-2.75L10 17.5l2.75-2.75");
}
</style><g class="ulnmmdpxh"><path class="bawx2v-qa"/><path class="br-zlicuw"/><path class="us8_ccnut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:scroll-depth"} {...others} />);
}

export default Component;
