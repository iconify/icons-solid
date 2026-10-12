import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cc_0sbb0p {
  d: path("M6.5 11h7v5h-7zm9.5 4.5l1.75-2l1.75 2");
}

.secm0bcqr {
  d: path("M2.75 3.75h18.5v16.5H2.75zM6.5 8h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="secm0bcqr"/><path class="cc_0sbb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kpi-card-sharp"} {...others} />);
}

export default Component;
