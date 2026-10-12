import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1xoa_blq {
  d: path("m12 11.75l-.538-1H8v1.5c0 2 4 1 4 3v1.5H8.538l-.538-1m2-6v1m0 6.5v1m5.75-15.5h5.5v5.5m0-5.5l-5 5");
}

.jg7xt1_6k {
  cx: 10px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="jg7xt1_6k"/><path class="i1xoa_blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monetize-coin-sharp"} {...others} />);
}

export default Component;
