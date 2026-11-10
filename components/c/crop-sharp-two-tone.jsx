import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.osw284bgy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 5H18C18.552 5 19 5.45 19 6V17H23V19H19V23H17V19H6C5.448 19 5 18.55 5 18V7H1V5H5V1H7V5Z");
  stroke: none;
}

.qhm4mzb4e {
  d: path("M6 1V18H23M18 23V6H1");
}
</style><g class="gp_8x1bzb"><path class="osw284bgy"/><path class="qhm4mzb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:crop-sharp-two-tone"} {...others} />);
}

export default Component;
