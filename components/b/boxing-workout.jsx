import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bitbxoblb {
  d: path("M6 12h3.5a2 2 0 0 1 0 4H7m1.25 3h7a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-7A1.25 1.25 0 0 1 7 20.25A1.25 1.25 0 0 1 8.25 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.smd5nc9bz {
  d: path("M6 11a6 6 0 0 1 12-1.5V13a6 6 0 0 1-6 6H9a3 3 0 0 1-3-3Z");
}
</style><g class="hntgybcog"><path class="smd5nc9bz"/><path class="bitbxoblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boxing-workout"} {...others} />);
}

export default Component;
