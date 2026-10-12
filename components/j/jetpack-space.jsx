import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e09ltnbrf {
  d: path("M10.5 9h3m-6 9v3m9-3v3");
}

.ee7li48xj {
  width: 6px;
  height: 12px;
  x: 4.5px;
  y: 3px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6qoqzwsf {
  width: 6px;
  height: 12px;
  x: 13.5px;
  y: 3px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="ee7li48xj"/><rect class="m6qoqzwsf"/><path class="e09ltnbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jetpack-space"} {...others} />);
}

export default Component;
