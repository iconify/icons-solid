import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0km0crlg {
  d: path("m4.25 12.5l7.75 4l7.75-4");
}

.ckkigcb1y {
  fill: currentColor;
  d: path("M10.5 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.h4sgjxbsw {
  d: path("M2.5 21L5 9h14l2.5 12Zm6-12V7a3.5 3.5 0 0 1 7 0v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4sgjxbsw"/><path class="a0km0crlg"/><path class="ckkigcb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-bags"} {...others} />);
}

export default Component;
