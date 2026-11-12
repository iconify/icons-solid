import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va1552nwh {
  d: path("M9 18L3 12L9 6M15 18L21 12L15 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.x1f4lc3zb {
  d: path("M12 2L12 22");
}
</style><g class="hntgybcog"><path class="va1552nwh"/><path class="x1f4lc3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-line-duotone"} {...others} />);
}

export default Component;
