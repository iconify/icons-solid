import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ceozypbtr {
  d: path("m14.295 6.63l5.538 9.97a2.625 2.625 0 0 1-2.294 3.9H6.461a2.625 2.625 0 0 1-2.294-3.9l5.538-9.97a2.625 2.625 0 0 1 4.59 0M9.75 12.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwjs67byu {
  d: path("m8.75 16.5l1 1l1-1m3-4v5m-1-4l1-1l1 1");
}
</style><g class="hntgybcog"><path class="ceozypbtr"/><path class="wwjs67byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:contraflow-sign"} {...others} />);
}

export default Component;
