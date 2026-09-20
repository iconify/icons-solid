import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgzhtab3b {
  fill: currentColor;
  d: path("M4 20V7h16v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.vj-1ubcjx {
  d: path("M4 20V7h16v13Z");
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="hntgybcog"><path class="jgzhtab3b"/><path class="vj-1ubcjx"/><path class="t0-mwc0xy"/><path class="zka_zabrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hospital-duotone-thin"} {...others} />);
}

export default Component;
