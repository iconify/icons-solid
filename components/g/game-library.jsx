import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hs9xvsb6k {
  d: path("M5.75 7.75v13.5");
}

.t0cw1v7ql {
  d: path("M5.25 7.75v-.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-.5");
}

.tgree443r {
  width: 13px;
  height: 13.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2px;
}

.w0891t8_y {
  d: path("M7.75 5.25v-.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-.5");
}
</style><g class="hntgybcog"><path class="w0891t8_y"/><path class="t0cw1v7ql"/><rect class="tgree443r"/><path class="hs9xvsb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:game-library"} {...others} />);
}

export default Component;
