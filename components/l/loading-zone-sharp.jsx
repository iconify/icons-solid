import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cujvaacjm {
  cx: 13.5px;
  cy: 18px;
  r: 1.75px;
}

.g9b4xgbmw {
  cx: 18.5px;
  cy: 18px;
  r: 1.75px;
}

.t-4mqj7hi {
  d: path("M13 10.5h5.5m-2.25-2.25l2.25 2.25l-2.25 2.25m-13.5-4.5h4.5v4.5h-4.5z");
}

.x_kgz-uor {
  d: path("M10.25 4.75h11v11.5h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x_kgz-uor"/><path class="t-4mqj7hi"/><circle class="cujvaacjm"/><circle class="g9b4xgbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:loading-zone-sharp"} {...others} />);
}

export default Component;
