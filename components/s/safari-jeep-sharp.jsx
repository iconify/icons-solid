import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnrnvwv4f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 19h.01");
}

.g27ahybtf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 19h.01");
}

.r0ew8gbrg {
  cx: 9.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.riohgnbtm {
  cx: 17.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z7fyc87xr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11V7h7v4m-8.75 4.75V11h9.75l.71.71l.08.08l.71.71h4.25v4.25H5.75z");
}
</style><g class="ux2u0rbkq"><path class="z7fyc87xr"/><circle class="r0ew8gbrg"/><path class="fnrnvwv4f"/><circle class="riohgnbtm"/><path class="g27ahybtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:safari-jeep-sharp"} {...others} />);
}

export default Component;
