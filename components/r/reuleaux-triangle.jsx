import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikvuw6bzw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.25h.01");
}

.l6gxj6y2q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.13 3.5a1 1 0 0 1 1.74 0a15 15 0 0 1 6.53 12.1a1 1 0 0 1-.87 1.5a15 15 0 0 1-13.06 0a1 1 0 0 1-.87-1.5a15 15 0 0 1 6.53-12.1");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="l6gxj6y2q"/><path class="ikvuw6bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reuleaux-triangle"} {...others} />);
}

export default Component;
