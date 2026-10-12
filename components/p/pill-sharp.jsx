import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iz8sjwb3r {
  d: path("m9.53 9.53l4.24-4.25a3.5 3.5 0 0 1 4.95 4.95l-4.25 4.24Z");
}

.we246k-fy {
  d: path("m9.53 9.53l-4.25 4.24a3.5 3.5 0 0 0 4.95 4.95l4.24-4.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="we246k-fy"/><path class="iz8sjwb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pill-sharp"} {...others} />);
}

export default Component;
