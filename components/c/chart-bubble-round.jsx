import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7weqqbxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 4v12a4 4 0 0 0 4 4h14");
}
</style><path class="a7weqqbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bubble-round"} {...others} />);
}

export default Component;
