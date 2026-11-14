import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f28kt_bsv {
  d: path("M3 8.5v3a5.5 2.75 0 0 0 11 0v-3M18.5 3v18m-3-3l3 3l3-3");
}

.hjjf4yaqz {
  d: path("M3 8.5a5.5 2.75 0 1 0 11 0a5.5 2.75 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjjf4yaqz"/><path class="f28kt_bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cost-down"} {...others} />);
}

export default Component;
