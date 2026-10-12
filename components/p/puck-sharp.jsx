import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_0g7mbyb {
  d: path("M2.75 10c0 2.35 4.14 4.25 9.25 4.25s9.25-1.9 9.25-4.25");
}

.u6ik4k8wl {
  d: path("M2.75 10c0-2.35 4.14-4.25 9.25-4.25s9.25 1.9 9.25 4.25v4c0 2.35-4.14 4.25-9.25 4.25S2.75 16.35 2.75 14Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u6ik4k8wl"/><path class="a_0g7mbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:puck-sharp"} {...others} />);
}

export default Component;
