import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jz9wb_afs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L19 2C19.5523 2 20 2.4477 20 3L20 8C20 8.5523 19.5523 9 19 9L5 9C4.4477 9 4 8.5523 4 8L4 3C4 2.4477 4.4477 2 5 2ZM12 15L19 15C19.5523 15 20 15.4477 20 16L20 21C20 21.5523 19.5523 22 19 22L5 22C4.4477 22 4 21.5523 4 21L4 16C4 15.4477 4.4477 15 5 15Z");
  stroke: none;
}

.xdk9_oksp {
  d: path("M2 12L22 12");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="jz9wb_afs"/><path class="xdk9_oksp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:separator-horizontal-sharp-fill"} {...others} />);
}

export default Component;
