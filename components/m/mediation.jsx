import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f02k2u2sq {
  d: path("M11.5 9H19a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v3l-3-3h-4.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxhqkvq2m {
  d: path("M14.5 6.25V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v2.75L6.75 12");
}
</style><g class="ulnmmdpxh"><path class="uxhqkvq2m"/><path class="f02k2u2sq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mediation"} {...others} />);
}

export default Component;
