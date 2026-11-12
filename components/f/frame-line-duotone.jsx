import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.beu8enohc {
  d: path("M22 19H2");
}

.fg37-14pa {
  d: path("M22 5H19M19 5H2M19 5V22M19 5V2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqpf2r_po {
  d: path("M5 22L5 2");
}
</style><g class="hntgybcog"><path class="fg37-14pa"/><path class="beu8enohc"/><path class="oqpf2r_po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:frame-line-duotone"} {...others} />);
}

export default Component;
