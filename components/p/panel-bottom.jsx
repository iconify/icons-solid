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

.x41tdd6rb {
  d: path("m9 7.25l3 3l3-3");
}

.z7z8npbvl {
  d: path("M2.5 3.5h19v17h-19Zm0 10.5h19");
}
</style><g class="ulnmmdpxh"><path class="z7z8npbvl"/><path class="x41tdd6rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:panel-bottom"} {...others} />);
}

export default Component;
