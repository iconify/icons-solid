import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pk0enpb1c {
  d: path("M8.7071 15.7071L15.2929 22.2929M15.2929 15.7071L8.7071 22.2929");
}

.slz5zy4do {
  fill: currentColor;
  d: path("M2 12L22 12L22 2C22 1.4477 21.5523 1 21 1L3 1C2.4477 1 2 1.4477 2 2L2 12Z");
  stroke: none;
}

.v7v5jwbly {
  stroke-opacity: 0.4;
  d: path("M6 20L3 20L3 11M21 11L21 20L18 20");
}
</style><g class="gp_8x1bzb"><path class="v7v5jwbly"/><path class="slz5zy4do"/><path class="pk0enpb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-remove-below-sharp-duotone"} {...others} />);
}

export default Component;
