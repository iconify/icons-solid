import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gh9e8cxqi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.75v-1.5a1.5 1.5 0 0 1 1.5-1.5h6.5a1.5 1.5 0 0 1 1.5 1.5v1.5m-4.75-3V18.5m0 0l-6.5.75m6.5-.75l6.5.75M12 18.5v.75");
}

.qaiu7ub3f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 20.5h.01m6.49 0h.01m6.49 0h.01");
}

.rz1tudbuq {
  width: 4.5px;
  height: 6.25px;
  x: 5px;
  y: 7.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gh9e8cxqi"/><path class="qaiu7ub3f"/><rect class="rz1tudbuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:iv-pole"} {...others} />);
}

export default Component;
