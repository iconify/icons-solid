import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5ijkbl6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v4H3Zm2 4v7a7 7 0 0 0 14 0V7M9 14a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3 0h.01");
}
</style><path class="v5ijkbl6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cctv-sharp"} {...others} />);
}

export default Component;
