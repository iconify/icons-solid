import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aj6k7brnw {
  d: path("M17.5 15.5v4m-2-2h4");
}

.gxvzqyibl {
  d: path("M6.25 7.75v3m2.5-3v3m-6 0h9.5v4h-9.5zm1 8h7.5");
}

.hk4_ptb-x {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5ch1qbmv {
  cx: 7.5px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><circle class="z5ch1qbmv"/><path class="gxvzqyibl"/><circle class="hk4_ptb-x"/><path class="aj6k7brnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clone-stamp-sharp"} {...others} />);
}

export default Component;
