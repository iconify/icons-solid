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

.j61d72bmp {
  d: path("M3 13h9m-9 5h12");
}

.l99m1zx8e {
  d: path("M16 8.6V5.4h1.25a1.1 1.1 0 0 1 0 2.2H16m1.25 0l.75 1");
}

.qdb17cczo {
  cx: 17px;
  cy: 7px;
  r: 4.25px;
}
</style><g class="hntgybcog"><path class="j61d72bmp"/><circle class="qdb17cczo"/><path class="l99m1zx8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:registered-sign"} {...others} />);
}

export default Component;
