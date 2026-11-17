import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hyzu9rcvy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10h18M4 10l2 10h12l2-10m-10 0v10m4-10v10M5 10l4-6m10 6l-4-6");
}

.x5m_6itjd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 20L4 10h16l-2 10Z");
}
</style><g class="ft5dv1b6b"><path class="x5m_6itjd"/><path class="hyzu9rcvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-basket-duotone-sharp"} {...others} />);
}

export default Component;
