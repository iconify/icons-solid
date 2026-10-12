import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ugkzx-t0u {
  cx: 13px;
  cy: 12.75px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z497j5bzr {
  d: path("M2.75 5.25h18.5M3 8.25h18a9 9 0 0 1-18 0Z");
}
</style><g class="x2cwu0gfd"><path class="z497j5bzr"/><circle class="ugkzx-t0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dome-camera-sharp"} {...others} />);
}

export default Component;
