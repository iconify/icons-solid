import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4fo3-b5d {
  d: path("M5 6h16.5L19 14H2.5Z");
}

.kxu2cbz_f {
  d: path("M2.5 14v3H19v-3m0 3l2.5-8V6m-10 2.75H16v2.5h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a4fo3-b5d"/><path class="kxu2cbz_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-kneeler"} {...others} />);
}

export default Component;
