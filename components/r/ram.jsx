import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipu8eku9c {
  d: path("M2 6.5h20v9H2Z");
}

.n5xigcpwn {
  d: path("M5 9.5h3v3H5Zm5.5 0h3v3h-3Zm5.5 0h3v3h-3Zm-10.5 6v3m3-3v3m7-3v3m3-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ipu8eku9c"/><path class="n5xigcpwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ram"} {...others} />);
}

export default Component;
