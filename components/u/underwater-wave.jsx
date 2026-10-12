import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpz2kmopt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17.5h.01M15 20h.01");
}

.wi6ajyznn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8q2.313-1.5 4.625 0T12 8t4.625 0t4.625 0m-18.5 4.5q2.313-1.5 4.625 0t4.625 0t4.625 0t4.625 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="wi6ajyznn"/><path class="dpz2kmopt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:underwater-wave"} {...others} />);
}

export default Component;
