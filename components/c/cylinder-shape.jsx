import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m65tfqb4d {
  d: path("M5.5 5.5c0-1.25 2.75-2.25 6.5-2.25s6.5 1 6.5 2.25v13c0 1.25-2.75 2.25-6.5 2.25s-6.5-1-6.5-2.25Z");
}

.r-cfn2qzg {
  d: path("M5.5 5.5c0 1.25 2.75 2.25 6.5 2.25s6.5-1 6.5-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m65tfqb4d"/><path class="r-cfn2qzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cylinder-shape"} {...others} />);
}

export default Component;
