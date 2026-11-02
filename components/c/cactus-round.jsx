import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n62kol-kt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 21V6a3 3 0 0 1 6 0v15M5 21h14M9 15H8a3 3 0 0 1-3-3V8m10 4h1a3 3 0 0 0 3-3V6");
}
</style><path class="n62kol-kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cactus-round"} {...others} />);
}

export default Component;
