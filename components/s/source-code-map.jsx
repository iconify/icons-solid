import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h17jhuqzw {
  d: path("m2.5 5l6-2l7 2l6-2v16l-6 2l-7-2l-6 2Z");
}

.o3yg2dkzr {
  d: path("M9.75 9L7 12l2.75 3m4.5-6L17 12l-2.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h17jhuqzw"/><path class="o3yg2dkzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:source-code-map"} {...others} />);
}

export default Component;
