import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tc3bcib6n {
  d: path("M6 14.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0h4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtb9yywnl {
  d: path("m3 9l9-6.5L21 9v12.5H3Z");
}
</style><g class="ulnmmdpxh"><path class="vtb9yywnl"/><path class="tc3bcib6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kitchen-shop"} {...others} />);
}

export default Component;
