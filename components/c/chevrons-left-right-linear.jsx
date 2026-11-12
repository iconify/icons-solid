import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo7nhnbsw {
  d: path("M15 6L21 12L15 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n18lttbuz {
  d: path("M9 6L3 12L9 18");
}
</style><g class="hntgybcog"><path class="bo7nhnbsw"/><path class="n18lttbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-linear"} {...others} />);
}

export default Component;
