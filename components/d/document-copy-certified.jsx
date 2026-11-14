import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhc1cv4vv {
  d: path("M4.5 17V5A2.5 2.5 0 0 1 7 2.5h8");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.tmpvgrbdw {
  d: path("M14.3 21.5H7.5V6h12v7.3m0 7.9v.3h-.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bhc1cv4vv"/><path class="tmpvgrbdw"/><path class="e9fltbcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:document-copy-certified"} {...others} />);
}

export default Component;
