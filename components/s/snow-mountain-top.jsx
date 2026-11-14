import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qctfvgbrd {
  d: path("m8.75 9l1.75 2.25l1.5-1.5l1.5 1.5L15.25 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjtyrzyfe {
  d: path("M2.5 20L12 3.5L21.5 20Z");
}
</style><g class="ulnmmdpxh"><path class="vjtyrzyfe"/><path class="qctfvgbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:snow-mountain-top"} {...others} />);
}

export default Component;
