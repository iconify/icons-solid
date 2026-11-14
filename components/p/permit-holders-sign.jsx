import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vngkfefhw {
  d: path("M2.5 2.5h19v13h-19Zm9.5 13v6");
}

.xncuyrj0j {
  d: path("M6.5 12.5v-7H8a2 2 0 0 1 0 4H6.5m6-.5l2 2l4-4");
}
</style><g class="ulnmmdpxh"><path class="vngkfefhw"/><path class="xncuyrj0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:permit-holders-sign"} {...others} />);
}

export default Component;
