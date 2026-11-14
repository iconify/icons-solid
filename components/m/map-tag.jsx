import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-e1gk-hd {
  d: path("M11.677 19.115L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v9.6M9 3.5V18m6-12v5.7");
}

.sb1gxdskl {
  d: path("M14.5 14.5h4L22 18l-3.5 3.5h-4ZM17 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j-e1gk-hd"/><path class="sb1gxdskl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:map-tag"} {...others} />);
}

export default Component;
