import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_-ir7pzy {
  d: path("M4.5 2.5h15v19h-15Zm3 4.5h9m-7 3.5h5M9.25 15v3.5");
}

.i1yj1kvwv {
  d: path("m12.25 15l1.5 3.5l1.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_-ir7pzy"/><path class="i1yj1kvwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:front-matter"} {...others} />);
}

export default Component;
