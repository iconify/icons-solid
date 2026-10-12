import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4o4nkb1m {
  width: 12.75px;
  height: 9.5px;
  x: 2.75px;
  y: 10.75px;
  rx: 2px;
}

.fwha2onxf {
  d: path("m16.44 13.17l3.87-1.34q.94-.33.94.67v6q0 1-.94.67l-3.87-1.34q-.94-.33-.94-1.33v-2q0-1 .94-1.33M6 14h4");
}

.fwnlhrbgy {
  cx: 12px;
  cy: 5.5px;
  r: 2.25px;
}

.g175mzbno {
  cx: 5px;
  cy: 5.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="g175mzbno"/><circle class="fwnlhrbgy"/><rect class="c4o4nkb1m"/><path class="fwha2onxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cinema-camera"} {...others} />);
}

export default Component;
