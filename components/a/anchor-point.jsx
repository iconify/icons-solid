import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dd2fi97pf {
  d: path("M3 20.75L10.25 11m4.25-2.5h6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ws4hpbvoz {
  width: 5px;
  height: 5px;
  x: 9.5px;
  y: 6px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="dd2fi97pf"/><rect class="ws4hpbvoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:anchor-point"} {...others} />);
}

export default Component;
