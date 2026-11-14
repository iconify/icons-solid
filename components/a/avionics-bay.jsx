import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ct5dvlmpj {
  d: path("M10.9 18.5H5.5v-13h13v5.9m-9-8.9v3m5-3v3m-12 4h3m-3 5h3m4 4v3m9-12h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8p-z660f {
  d: path("M9 9h6v6H9Zm9 5.25v7.25m-3.75-2.75l3.75-2l3.75 2m-5.5 2.75h3.5");
}
</style><g class="ulnmmdpxh"><path class="ct5dvlmpj"/><path class="y8p-z660f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:avionics-bay"} {...others} />);
}

export default Component;
