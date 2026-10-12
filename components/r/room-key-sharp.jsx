import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxq4cabdw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 11.25v10m0-4.5h2.75m-2.75 3h2.25m-5.5-10l-2.75 2.5m-.82.23l2.14 2.29l.68.73l-.68.73l-2.14 2.29l-.68.73l-.68-.73l-2.14-2.29l-.68-.73l.68-.73l2.14-2.29l.68-.73z");
}

.iman5s0zj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.5 7h.01");
}

.njt_sfbnu {
  cx: 14.5px;
  cy: 7px;
  r: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="njt_sfbnu"/><path class="iman5s0zj"/><path class="cxq4cabdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:room-key-sharp"} {...others} />);
}

export default Component;
