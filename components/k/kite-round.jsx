import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hunngnbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 13l-4 4a1.414 1.414 0 0 1-2 0l-7-7c-.517-.517.448-1.965 2-3l6-4l6 4c1.552 1.035 2.517 2.483 2 3zm-5-9v13M4 9h16m-8 9c0 3 5 3 7 3");
}
</style><path class="hunngnbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:kite-round"} {...others} />);
}

export default Component;
