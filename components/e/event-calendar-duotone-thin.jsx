import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-hbuyb5n {
  d: path("M4 7c1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0");
}

.cnhayvjyz {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mc1omvbiw {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.n887hrq4r {
  d: path("M7 17h6");
}
</style><g class="hntgybcog"><path class="cnhayvjyz"/><path class="mc1omvbiw"/><path class="c-hbuyb5n"/><path class="n-7t0yb1r"/><path class="n887hrq4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:event-calendar-duotone-thin"} {...others} />);
}

export default Component;
