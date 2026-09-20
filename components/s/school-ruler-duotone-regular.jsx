import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8utnip8g {
  fill: currentColor;
  d: path("M2 16 16 2l6 6L8 22Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m8h6hlbgk {
  d: path("m5 13 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uux3anbrn {
  d: path("m9 9 3 3");
}

.xvabp0bhv {
  d: path("M2 16 16 2l6 6L8 22Z");
}

.yyqghmoaf {
  d: path("m13 5 3 3");
}
</style><g class="nrj6p8qat"><path class="j8utnip8g"/><path class="xvabp0bhv"/><path class="m8h6hlbgk"/><path class="uux3anbrn"/><path class="yyqghmoaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:school-ruler-duotone-regular"} {...others} />);
}

export default Component;
