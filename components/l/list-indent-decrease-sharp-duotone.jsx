import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hl649zb0c {
  stroke-opacity: 0.4;
  d: path("M9 12L2 12M5.2929 8.7071L2 12L5.2929 15.2929");
}

.spmdglbzj {
  d: path("M11 6L23 6M11 12L23 12M11 18L23 18");
}
</style><g class="gp_8x1bzb"><path class="hl649zb0c"/><path class="spmdglbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-indent-decrease-sharp-duotone"} {...others} />);
}

export default Component;
