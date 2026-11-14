import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.co7fepbfb {
  d: path("M3.5 21.5h5m-2.5 0V7a4 4 0 0 1 4-4h3m0 0h7l-1.5 2.75h-4Zm-7 9.5h3.5");
}

.mjsqoxwmr {
  fill: currentColor;
  d: path("M14 12.5h.01");
}

.n7jit38gl {
  d: path("M9.5 9.5h9v6h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="co7fepbfb"/><path class="n7jit38gl"/><path class="mjsqoxwmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:street-light-camera"} {...others} />);
}

export default Component;
