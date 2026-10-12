import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aucj88tny {
  d: path("M2.75 17.75c3.5 0 5-1.25 6.25-3s2.5-2.25 5.75-2.25m2.85-6.9l.8.8q.35.35 0 .7l-.8.8q-.35.35-.7 0l-.8-.8q-.35-.35 0-.7l.8-.8q.35-.35.7 0m-4.24-.62l2.12-2.12m3.54 7.78l2.12-2.12");
}

.b-oo4bbem {
  width: 12px;
  height: 12px;
  x: 2.75px;
  y: 9.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="b-oo4bbem"/><path class="aucj88tny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:satellite-view"} {...others} />);
}

export default Component;
