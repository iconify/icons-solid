import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i21l4cbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-opacity: 0.4;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20h.01M10 20h.01M14 20h.01M18 20h.01");
}
</style><path class="i21l4cbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-none-duocolor-round"} {...others} />);
}

export default Component;
