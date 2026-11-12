import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax2a_u0ki {
  d: path("M18 9L21 12L15 18");
}

.di4tvaczb {
  d: path("M9 18L3 12L9 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.gw6llof_t {
  d: path("M15 18L21 12L15 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdgij1_su {
  d: path("M6 9L3 12L9 18");
}
</style><g class="hntgybcog"><path class="gw6llof_t"/><path class="ax2a_u0ki"/><path class="di4tvaczb"/><path class="jdgij1_su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-line-duotone"} {...others} />);
}

export default Component;
