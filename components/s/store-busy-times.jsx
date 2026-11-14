import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amfl_dbxf {
  d: path("M2.5 21.5h19m-17-3V14m4 4.5V10");
}

.m0xbpb-yh {
  d: path("M16.5 18.5v-10m3.5 10V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x52kakycz {
  fill: currentColor;
  d: path("M11 5h3v13.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="amfl_dbxf"/><path class="x52kakycz"/><path class="m0xbpb-yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:store-busy-times"} {...others} />);
}

export default Component;
