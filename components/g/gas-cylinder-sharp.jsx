import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbpmmobdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 19H4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4zM8 19v2h8v-2M4 13h16M8 7V3h8v4");
}
</style><path class="qbpmmobdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gas-cylinder-sharp"} {...others} />);
}

export default Component;
