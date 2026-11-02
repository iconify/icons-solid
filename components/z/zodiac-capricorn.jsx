import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qgfxckblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3a4 4 0 0 1 4 4v9m0-9a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3m3-6a3 3 0 0 0 6 0m0 0a3 3 0 0 0-6 0");
}
</style><path class="qgfxckblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-capricorn"} {...others} />);
}

export default Component;
