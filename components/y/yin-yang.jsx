import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxiro30fo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a9 9 0 0 1 0 18a5.5 5.5 0 0 1 0-9a5.5 5.5 0 0 0 0-9");
}

.dw4-5zf2r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 7.5h.01m1.99 9h.01");
}

.m7ymxrukq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a9 9 0 0 0 0 18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="m7ymxrukq"/><path class="cxiro30fo"/><path class="dw4-5zf2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:yin-yang"} {...others} />);
}

export default Component;
