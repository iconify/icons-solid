import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a42iin_iw {
  d: path("m8.25 12.25l2.5 2.5l5-5");
}

.nmvzogu3o {
  d: path("m21.5 12l-3.25 3.75l-1.5 4.5l-4.75-1l-4.75 1l-1.5-4.5L2.5 12l3.25-3.75l1.5-4.5l4.75 1l4.75-1l1.5 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nmvzogu3o"/><path class="a42iin_iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:benefit-company-badge"} {...others} />);
}

export default Component;
