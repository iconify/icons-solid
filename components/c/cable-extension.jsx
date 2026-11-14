import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi1xf-bwn {
  d: path("M5 2.5v2m3-2v2m-4.5 0h6V7a3 3 0 0 1-6 0Z");
}

.qcda3fbuh {
  d: path("M6.5 10v4a3 3 0 0 0 3 3H12m0-4h9.5v8H12Zm3 4h.01m3.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bi1xf-bwn"/><path class="qcda3fbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-extension"} {...others} />);
}

export default Component;
