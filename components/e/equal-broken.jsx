import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dg92_ciox {
  d: path("M4 9H12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s1rkwjrif {
  d: path("M4 15H20");
}

.zno29s8sw {
  d: path("M16 9H20");
}
</style><g class="hntgybcog"><path class="dg92_ciox"/><path class="zno29s8sw"/><path class="s1rkwjrif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:equal-broken"} {...others} />);
}

export default Component;
