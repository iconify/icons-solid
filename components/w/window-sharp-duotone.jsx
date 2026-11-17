import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iu3a4cbne {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 2C20.552 2 21 2.448 21 3V20H23V22H1V20H3V3C3 2.448 3.448 2 4 2H20Z");
}

.j9mc13bit {
  d: path("M11 20H5V13H11V20ZM19 13V20H13V13H19ZM11 11H5V4H11V11Z");
}

.yzp1an2yx {
  d: path("M19 11H13V4H19V11Z");
}
</style><g class="cuyn6tgcc"><path class="iu3a4cbne"/><path class="j9mc13bit"/><path class="yzp1an2yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:window-sharp-duotone"} {...others} />);
}

export default Component;
