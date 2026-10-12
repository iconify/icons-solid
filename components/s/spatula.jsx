import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3_2x7bkm {
  d: path("M10.5 5.5v3m3-3v3M12 11.25v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngmaxll2h {
  width: 3px;
  height: 5.75px;
  x: 10.5px;
  y: 15.5px;
  rx: 1.5px;
}

.xrwmfnrib {
  width: 9px;
  height: 8.5px;
  x: 7.5px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="xrwmfnrib"/><path class="f3_2x7bkm"/><rect class="ngmaxll2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spatula"} {...others} />);
}

export default Component;
