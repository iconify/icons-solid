import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e--1ehb5o {
  d: path("M6.25 9c6 0 5.5-3 11.5-3m-11.5 9c6 0 5.5 3 11.5 3");
}

.foujtlbte {
  width: 3.5px;
  height: 6.5px;
  x: 17.75px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebrm_8wg {
  width: 3.5px;
  height: 6.5px;
  x: 17.75px;
  y: 14.75px;
  rx: 1px;
}

.oij_xbccr {
  width: 3.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="oij_xbccr"/><rect class="foujtlbte"/><rect class="kebrm_8wg"/><path class="e--1ehb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sankey"} {...others} />);
}

export default Component;
