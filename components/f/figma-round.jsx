import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfa43gb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15h3m-3 0a3 3 0 1 0 3 3v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6V3m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-3 3a3 3 0 1 1 0-6m3 6v-3m0-3v3m0-3h3m-3-6h3a3 3 0 1 1 0 6");
}
</style><path class="dfa43gb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:figma-round"} {...others} />);
}

export default Component;
