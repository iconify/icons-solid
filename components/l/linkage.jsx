import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqcwkrrbr {
  d: path("m9.676 17.52l8.25-14.29l3.898 2.25l-8.25 14.29Zm-4.926-.27h.01m7.74 0h.01M19 5.75h.01");
}

.oh_-q4jir {
  d: path("M3 15h11.75v4.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oh_-q4jir"/><path class="jqcwkrrbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:linkage"} {...others} />);
}

export default Component;
