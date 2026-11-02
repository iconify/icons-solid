import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tt5z-ac7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 6l-3-3l-3 3m3-3v9m-3 6l3 3l3-3m-3 3v-9M6 9l-3 3l3 3m-3-3h9m6 3l3-3l-3-3m3 3h-9");
}
</style><path class="tt5z-ac7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:move-duocolor-round"} {...others} />);
}

export default Component;
