import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.teq--xbwy {
  d: path("M7.5 14q4.5 2.5 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w079honqu {
  d: path("M4.5 9.5a3 3 0 1 1 5 0h5a3 3 0 1 1 5 0c2 1.5 2.25 5.5 0 7.5c-3 2.75-12 2.75-15 0c-2.25-2-2-6 0-7.5ZM7 8h.01M17 8h.01");
}
</style><g class="ulnmmdpxh"><path class="w079honqu"/><path class="teq--xbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:amphibian"} {...others} />);
}

export default Component;
