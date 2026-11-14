import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpfshnrsz {
  d: path("M9.5 9.5a2.5 2.5 0 1 1 3.75 2.25c-.75.5-1.25 1-1.25 2V14m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdho_fz-w {
  d: path("M8 2.5h8L21.5 8v8L16 21.5H8L2.5 16V8Z");
}
</style><g class="ulnmmdpxh"><path class="vdho_fz-w"/><path class="cpfshnrsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:help-octagon"} {...others} />);
}

export default Component;
