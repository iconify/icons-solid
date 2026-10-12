import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-2k5unja {
  cx: 6.75px;
  cy: 12.25px;
  r: 1.75px;
}

.f0npv8bkd {
  d: path("M7.5 2.75h11V8h-5.25L12 9.5L10.75 8H5.5V2.75zM9 5.4h6");
}

.fwpet3b4e {
  d: path("M3 21.25v-1a3.75 3.75 0 0 1 7.5 0v1Z");
}

.jl82pcb2a {
  cx: 17.25px;
  cy: 12.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zoaae6bwy {
  d: path("M13.5 21.25v-1a3.75 3.75 0 0 1 7.5 0v1Z");
}
</style><g class="x2cwu0gfd"><path class="f0npv8bkd"/><circle class="c-2k5unja"/><path class="fwpet3b4e"/><circle class="jl82pcb2a"/><path class="zoaae6bwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parent-teacher-sharp"} {...others} />);
}

export default Component;
