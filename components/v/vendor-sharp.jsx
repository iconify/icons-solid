import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im8lz_bbl {
  d: path("M6.5 2.75h11l2.25 2.5H4.25ZM5 5.25V17M19 5.25V17");
}

.vvevd10gu {
  d: path("M8 17c0-1.6 1.8-2.5 4-2.5s4 .9 4 2.5Zm-5.25 0h18.5v4.25H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytopibb5c {
  cx: 12px;
  cy: 10px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="im8lz_bbl"/><circle class="ytopibb5c"/><path class="vvevd10gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vendor-sharp"} {...others} />);
}

export default Component;
