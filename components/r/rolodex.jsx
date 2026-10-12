import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ej1wn2b7a {
  width: 11px;
  height: 6.5px;
  x: 6.5px;
  y: 9.5px;
  rx: 1.5px;
}

.exwhujbvc {
  d: path("m3.75 6.25l10.5-2.75l1 3M18 5.75l2.25.5l-.25 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyswatbmw {
  d: path("M9 12.75h6M3.5 13v8.25h17V13M2.75 13h1.5m15.5 0h1.5");
}
</style><g class="hntgybcog"><path class="exwhujbvc"/><rect class="ej1wn2b7a"/><path class="kyswatbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rolodex"} {...others} />);
}

export default Component;
