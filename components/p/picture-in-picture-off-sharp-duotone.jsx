import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jxdi5cebb {
  stroke-opacity: 0.4;
  d: path("M22 9V4H9.657H8.657M4 4H2V20H9");
}

.n_ft0abym {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.88 21H12C11.448 21 11 20.552 11 20V12C11 11.754 11.089 11.529 11.235 11.355L20.88 21ZM14.657 11H22C22.552 11 23 11.448 23 12V19.343L14.657 11Z");
  stroke: none;
}

.qib3ujb7r {
  d: path("M1.707 1.707L22.293 22.293");
}
</style><g class="gp_8x1bzb"><path class="n_ft0abym"/><path class="jxdi5cebb"/><path class="qib3ujb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:picture-in-picture-off-sharp-duotone"} {...others} />);
}

export default Component;
