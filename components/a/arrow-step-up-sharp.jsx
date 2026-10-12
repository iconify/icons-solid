import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcigp9a4c {
  d: path("M3.75 20.25h5v-5h5v-5h3.5V4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9g08dbag {
  d: path("m14.25 7.5l3-3l3 3");
}
</style><g class="x2cwu0gfd"><path class="bcigp9a4c"/><path class="z9g08dbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-step-up-sharp"} {...others} />);
}

export default Component;
