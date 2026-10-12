import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.et5qtnbxc {
  d: path("M8.25 9.5v5a.75.75 0 0 0 1.15.65l3.75-2.5a.75.75 0 0 0 0-1.3L9.4 8.85a.75.75 0 0 0-1.15.65m9.5-2l1.5-1.5l1.5 1.5m-3 9l1.5 1.5l1.5-1.5");
}

.frcloebgk {
  width: 11px;
  height: 18.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="frcloebgk"/><path class="et5qtnbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:short-video"} {...others} />);
}

export default Component;
