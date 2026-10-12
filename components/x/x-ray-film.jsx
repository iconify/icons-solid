import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g51vexztm {
  d: path("M9.5 2.75h5M9.17 14.16l3.89-3.89a1.6 1.6 0 1 1 2.58-.81a1.6 1.6 0 1 1-.81 2.58l-3.89 3.89a1.6 1.6 0 1 1-2.58.81a1.6 1.6 0 1 1 .81-2.58");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tj3aa_bgi {
  width: 16.5px;
  height: 16.25px;
  x: 3.75px;
  y: 5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="tj3aa_bgi"/><path class="g51vexztm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:x-ray-film"} {...others} />);
}

export default Component;
