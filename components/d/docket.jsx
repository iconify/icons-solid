import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3am0wbnu {
  d: path("M5.5 10V8.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2V18h-3");
}

.k_zfbokkv {
  d: path("M2.5 10h13v11.5h-13Z");
}

.ouz06957u {
  d: path("M8.5 6.5V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9.5h-3m-13-1h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k_zfbokkv"/><path class="g3am0wbnu"/><path class="ouz06957u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:docket"} {...others} />);
}

export default Component;
