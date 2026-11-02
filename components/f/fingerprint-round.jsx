import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4t73obvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17v-3a8.062 8.062 0 0 1 12-8m3 3a8.1 8.1 0 0 1 1 3v4m-8-3v5m-4 1v-6a4 4 0 1 1 8 0v3");
}
</style><path class="y4t73obvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fingerprint-round"} {...others} />);
}

export default Component;
