import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m71dnzbqy {
  d: path("m8.301 7.23l6.358-1.351l1.04 4.891l-6.358 1.351Zm7.449 8.27h.01");
}

.s8684zb2h {
  d: path("M5 2.5h14v19H5Zm-2.5 19h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s8684zb2h"/><path class="m71dnzbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:delivery-card-left"} {...others} />);
}

export default Component;
