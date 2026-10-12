import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euafue3nb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25q1.875-3 4.5-3c2.625 0 3.25 1 4.5 3q-1.875 3-4.5 3c-2.625 0-3.25-1-4.5-3Z");
}

.kowaom1sy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11.25h.01");
}

.n7x-_ubqb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l7.25 2.75v6c0 4.75-3 8.25-7.25 9.75c-4.25-1.5-7.25-5-7.25-9.75v-6Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="n7x-_ubqb"/><path class="euafue3nb"/><path class="kowaom1sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:threat-intel-sharp"} {...others} />);
}

export default Component;
