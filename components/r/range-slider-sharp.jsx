import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bij3zcbco {
  cx: 7.5px;
  cy: 12px;
  r: 2.5px;
}

.bvma_qtjv {
  d: path("M3.75 12H5m14 0h1.25M10 12h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfgecdbpk {
  cx: 16.5px;
  cy: 12px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="bvma_qtjv"/><circle class="bij3zcbco"/><circle class="xfgecdbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:range-slider-sharp"} {...others} />);
}

export default Component;
