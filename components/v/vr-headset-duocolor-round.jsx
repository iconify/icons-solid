import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.unbad5scs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10c0-3 2-4 5-4h8c3 0 5 1 5 4v3c0 3-2 5-4 5s-3-3-5-3s-3 3-5 3s-4-2-4-5Z");
}
</style><path class="unbad5scs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vr-headset-duocolor-round"} {...others} />);
}

export default Component;
