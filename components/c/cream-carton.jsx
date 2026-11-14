import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d78rtgbwj {
  d: path("M4.5 21.5v-11l4-4.5l4 4.5v11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv0mifbxv {
  d: path("M8.5 6h7l4 4.5v11h-7M8.5 6V3h7v3m-11 8h15m-15 4h15");
}
</style><g class="ulnmmdpxh"><path class="d78rtgbwj"/><path class="zv0mifbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cream-carton"} {...others} />);
}

export default Component;
