import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhfesmhux {
  d: path("M6.4 2.5H18v11.6m-.9 6.9H3V6.9");
}

.nzwidpv5u {
  d: path("M9.4 5.5h4.1v4.1M11.1 15H7.5v-3.6m-4-7.9l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhfesmhux"/><path class="nzwidpv5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smart-switch-off"} {...others} />);
}

export default Component;
