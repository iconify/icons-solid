import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fjehvrbpc {
  d: path("M2.75 7.25h18.5v13.5H2.75zm6 0v-3.5h6.5v3.5");
}

.vfbi-4t6c {
  d: path("m9.75 11.75l-2 2.25l2 2.25m4.5-4.5l2 2.25l-2 2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fjehvrbpc"/><path class="vfbi-4t6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sdk-sharp"} {...others} />);
}

export default Component;
