import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b96pc7bbs {
  d: path("M6.5 16.5h3m5 0h3M4.25 11.75l13.75-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3b4orb3k {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 11.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="v3b4orb3k"/><path class="b96pc7bbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dumpster"} {...others} />);
}

export default Component;
