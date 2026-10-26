import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abui5slpu {
  d: path("M2 14L2 4L16 4M6 8L22 8L22 20L6 20ZM6 11L14 14.4435L22 11");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pxaw6ltod {
  fill: currentColor;
  d: path("M6 11L6 8L22 8L22 11L14 14.4435L6 11Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="pxaw6ltod"/><path class="abui5slpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mails-sharp-fill"} {...others} />);
}

export default Component;
