import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s6r0hppzp {
  d: path("M3.5 12.5H8v7H3.5Zm12.5 0h4.5v7H16Z");
}

.ukg0kpkum {
  d: path("M4.5 13v-1a7.5 7.5 0 0 1 15 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ukg0kpkum"/><path class="s6r0hppzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:audio-guide"} {...others} />);
}

export default Component;
