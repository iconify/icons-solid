import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhgizy_kw {
  d: path("m2.5 11l6-6.5l6 6.5v10.5h-12Zm12 10.5V7a3.5 3.5 0 0 1 7 0v14.5Z");
}

.ji_nn839s {
  d: path("M6.5 21.5V17h4v4.5m4-10.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hhgizy_kw"/><path class="ji_nn839s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:farmhouse"} {...others} />);
}

export default Component;
