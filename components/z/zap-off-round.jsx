import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jimenrcyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7.658 10.658l-1.413 1.777A.965.965 0 0 0 7 14h1.25a2 2 0 0 1 2 2v3c0 .661.833.952 1.245.435l2.189-2.751m2.658-3.342l1.413-1.777A.965.965 0 0 0 17 10h-1.25a2 2 0 0 1-2-2V5c0-.661-.833-.952-1.245-.435l-2.189 2.751M2 5l17 17");
}
</style><path class="jimenrcyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-off-round"} {...others} />);
}

export default Component;
