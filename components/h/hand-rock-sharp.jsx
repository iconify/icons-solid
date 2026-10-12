import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-qrvccol {
  d: path("M9.5 10.5v2.25m2.75-2.25v2.25M15 10.5v2.25M7 14h2.625l1.875-1.5M9 21h6.5");
}

.e0hugac3h {
  d: path("M7 4.25V3h2.5v7.5H15v-6h2.5v13.75H7v-4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e0hugac3h"/><path class="e-qrvccol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hand-rock-sharp"} {...others} />);
}

export default Component;
