import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kue4qbc3w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 20.75h.01");
}

.rjc1od8nf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.uastzoo4t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.25V12l-3 2m9.5.5v3.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rjc1od8nf"/><path class="uastzoo4t"/><path class="kue4qbc3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clock-alert-sharp"} {...others} />);
}

export default Component;
