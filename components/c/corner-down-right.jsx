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

.hynzddbgn {
  d: path("m15.5 11l3.75 3.75l-3.75 3.75");
}

.skkiwmb7k {
  d: path("M4.25 4.25v8a2.5 2.5 0 0 0 2.5 2.5h12.5");
}
</style><g class="hntgybcog"><path class="skkiwmb7k"/><path class="hynzddbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-down-right"} {...others} />);
}

export default Component;
