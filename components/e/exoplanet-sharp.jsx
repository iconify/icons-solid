import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dld8vub9v {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
}

.eg9mt6mfq {
  d: path("M2.75 18H9l1.5 2.5h3L15 18h6.25");
}

.g-dpvobhq {
  cx: 13px;
  cy: 9.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dld8vub9v"/><circle class="g-dpvobhq"/><path class="eg9mt6mfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:exoplanet-sharp"} {...others} />);
}

export default Component;
