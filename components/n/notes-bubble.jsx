import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hl_oygboe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-8l-4 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m1 5h10M7 13h10");
}
</style><path class="hl_oygboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:notes-bubble"} {...others} />);
}

export default Component;
