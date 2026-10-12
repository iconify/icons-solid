import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1d-q_w_m {
  d: path("M2.75 17.75h6l1.5 2.25h3.5l1.5-2.25h6");
}

.h2g8fpd8t {
  cx: 14px;
  cy: 9.5px;
  r: 1.75px;
}

.ua36z6mem {
  cx: 12px;
  cy: 9px;
  r: 6.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ua36z6mem"/><circle class="h2g8fpd8t"/><path class="f1d-q_w_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:planet-transit-sharp"} {...others} />);
}

export default Component;
