import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7x-z5m1d {
  d: path("m12 7l-3.75 6h7.5Zm0 6v2.5");
}

.u4c4gab6p {
  d: path("M6 15.5a7.5 7.5 0 1 1 12 0m-13.5 0h15L21 21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u4c4gab6p"/><path class="t7x-z5m1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:souvenir"} {...others} />);
}

export default Component;
