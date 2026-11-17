import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pe085kb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.592 3.11A9 9 0 0 1 20.89 13.409m-1.608 3.882a9 9 0 0 1-1.99 1.991m-3.883 1.608a9 9 0 0 1-2.816 0M6.71 19.281a9 9 0 0 1-1.991-1.99M3.11 13.407a9 9 0 0 1 0-2.816M4.719 6.71a9 9 0 0 1 1.99-1.991M10 9v6c0 .23.54.23 1 0l4-2a1.118 1.118 0 0 0 0-2l-4-2c-.46-.23-1-.23-1 0");
}
</style><path class="pe085kb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-dashed-play-quarter"} {...others} />);
}

export default Component;
