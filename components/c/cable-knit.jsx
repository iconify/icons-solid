import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.en_o_wbfu {
  d: path("M15 2.5C15 7 9 7 9 12s6 5 6 9.5M5 2.5v19m14-19v19");
}

.k57xcbcoz {
  d: path("M9 2.5C9 7 15 7 15 12s-6 5-6 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k57xcbcoz"/><path class="en_o_wbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-knit"} {...others} />);
}

export default Component;
