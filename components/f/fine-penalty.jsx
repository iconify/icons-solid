import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw62_bb2z {
  d: path("M9 11a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9 3.5V18m0 3h.01");
}

.m4zgx4j1c {
  d: path("M15.2 17H2.5V5h19v12h-.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m4zgx4j1c"/><path class="gw62_bb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fine-penalty"} {...others} />);
}

export default Component;
