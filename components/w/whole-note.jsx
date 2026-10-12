import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp94v5blq {
  d: path("M9.89 13.77a2.75 1.75-40 1 0 4.22-3.54a2.75 1.75-40 1 0-4.22 3.54");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4yjxhb8b {
  d: path("M4.5 12a7.5 5.25 0 1 0 15 0a7.5 5.25 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="z4yjxhb8b"/><path class="bp94v5blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:whole-note"} {...others} />);
}

export default Component;
