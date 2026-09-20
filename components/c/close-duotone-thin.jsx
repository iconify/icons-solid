import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edg0x3nuq {
  d: path("m5 5 14 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh3dhlbde {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 5 14 14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wvha8hh3o {
  d: path("M19 5 5 19");
}

.zr-n-ubjz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 5 5 19");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="kh3dhlbde"/><path class="zr-n-ubjz"/><path class="edg0x3nuq"/><path class="wvha8hh3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:close-duotone-thin"} {...others} />);
}

export default Component;
