import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.en1zq61jm {
  cx: 7.5px;
  cy: 17.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2nk7xbhz {
  d: path("M7.5 2.75a3 4.75 0 1 1 0 9.5a3 4.75 0 1 1 0-9.5");
}

.tg81c0bqt {
  d: path("M16.5 4.75a3 4.75 0 1 1 0 9.5a3 4.75 0 1 1 0-9.5");
}

.zop88fbkj {
  cx: 16.5px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="k2nk7xbhz"/><circle class="en1zq61jm"/><path class="tg81c0bqt"/><circle class="zop88fbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:steps-counter"} {...others} />);
}

export default Component;
