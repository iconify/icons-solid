import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l13i2rbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h5v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h5v4h-5v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1H3zm0-2v8m18-8v8m-9-9V5M9 5h6");
}
</style><path class="l13i2rbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:valve"} {...others} />);
}

export default Component;
