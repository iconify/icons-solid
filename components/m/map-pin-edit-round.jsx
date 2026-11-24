import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zn0b1vbde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21c-3-2-7-6-7-11a7 7 0 0 1 14 0c0 5-4 9-7 11m-3-8v-2l4-4l2 2l-4 4Z");
}
</style><path class="zn0b1vbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-pin-edit-round"} {...others} />);
}

export default Component;
