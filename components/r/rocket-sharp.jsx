import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eghrht6fx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 12l2-4c2-4 6-5 10-5c0 4-1 8-5 10l-4 2Zm0 0H5c0-2 1-4 3-4h3m1 7v4c2 0 4-1 4-3v-3M3 21c1 0 4 0 5-1a2.828 2.828 0 1 0-4-4c-1 1-1 4-1 5");
}
</style><path class="eghrht6fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rocket-sharp"} {...others} />);
}

export default Component;
