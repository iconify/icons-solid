import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8qc5k-bv {
  d: path("M5.5 5.5H12v8H5.5Zm3.25 0h.01M7.25 9h3m-3 2.25h2M14.5 7h4v4.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5meg9wfl {
  d: path("M2.5 3h19v13h-19ZM6 16v5.5M18 16v5.5");
}
</style><g class="ulnmmdpxh"><path class="v5meg9wfl"/><path class="j8qc5k-bv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:community-notice"} {...others} />);
}

export default Component;
