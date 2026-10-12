import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aku9opbik {
  d: path("M2.75 7V4.75a2 2 0 0 1 2-2H7m10 0h2.25a2 2 0 0 1 2 2V7m0 10v2.25a2 2 0 0 1-2 2H17m-10 0H4.75a2 2 0 0 1-2-2V17M10.5 2.75h3m-3 18.5h3M2.75 10.5v3m18.5-3v3");
}

.d_cwiebvu {
  width: 9.5px;
  height: 9.5px;
  x: 7.25px;
  y: 7.25px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aku9opbik"/><rect class="d_cwiebvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:select-all"} {...others} />);
}

export default Component;
