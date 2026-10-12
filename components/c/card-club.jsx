import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7xvndbeo {
  d: path("m10.25 17.25l.79-3.24a2.4 2.4 0 1 1-.87-3.56a2.4 2.4 0 1 1 3.66 0a2.4 2.4 0 1 1-.87 3.56l.79 3.24Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tth1ssbry {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="tth1ssbry"/><path class="h7xvndbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:card-club"} {...others} />);
}

export default Component;
