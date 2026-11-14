import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.obl84cb6h {
  d: path("M2.75 14.75a4 4 0 1 1 2.5 2.5m16-2.5a4 4 0 1 0-2.5 2.5");
}

.otugt1b0u {
  d: path("M4.75 6.5h3.5v3h-3.5Zm11 0h3.5v3h-3.5ZM8.25 8h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obl84cb6h"/><path class="otugt1b0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrest"} {...others} />);
}

export default Component;
