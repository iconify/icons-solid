import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwm8m9b2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6h3c1.28 0 2.36.36 3 1l2 2a4.243 4.243 0 0 1 0 6l-2 2c-.64.64-1.72 1-3 1H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z");
}
</style><path class="hwm8m9b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:label-round"} {...others} />);
}

export default Component;
