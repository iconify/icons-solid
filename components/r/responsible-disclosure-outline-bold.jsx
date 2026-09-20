import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m__vw4oyn {
  d: path("m12 11 2.5 2.5L12 16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}

.z0uajmpfu {
  d: path("M9 8v5.5h5.5");
}
</style><g class="s0phu2bbs"><path class="ymp2b4b6u"/><path class="z0uajmpfu"/><path class="m__vw4oyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:responsible-disclosure-outline-bold"} {...others} />);
}

export default Component;
