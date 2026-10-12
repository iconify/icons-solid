import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-_lgkwob {
  d: path("M7.25 2.75v18.5M14.2 6.46l2.6 1.23q.45.21 0 .42l-2.6 1.23q-.45.21-.9 0l-2.6-1.23q-.45-.21 0-.42l2.6-1.23q.45-.21.9 0");
}

.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ptv5l5udv {
  d: path("M11.75 8.75V11c1.33.9 2.67.9 4 0V8.75M10.25 15h6.5m-6.5 3h4");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="b-_lgkwob"/><path class="ptv5l5udv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thesis"} {...others} />);
}

export default Component;
