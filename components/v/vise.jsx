import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1pfcob0l {
  d: path("M5.75 11.5h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogx3_duqw {
  width: 4px;
  height: 7.5px;
  x: 14px;
  y: 8px;
  rx: 1px;
}

.u_oknzb0u {
  width: 6px;
  height: 10.75px;
  x: 4px;
  y: 8px;
  rx: 1px;
}

.wr2x5kspn {
  d: path("M18 11.75h3m0-2.5v5");
}

.zlofg9crx {
  width: 16px;
  height: 2.5px;
  x: 4px;
  y: 18.75px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="zlofg9crx"/><rect class="u_oknzb0u"/><path class="e1pfcob0l"/><rect class="ogx3_duqw"/><path class="wr2x5kspn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vise"} {...others} />);
}

export default Component;
