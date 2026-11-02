import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qduqn3niy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-4c0-1.28.36-2.36 1-3l2-2a2.83 2.83 0 0 1 4 0l2 2c.64.64 1 1.72 1 3v4m-8-8V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12");
}
</style><path class="qduqn3niy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-round"} {...others} />);
}

export default Component;
