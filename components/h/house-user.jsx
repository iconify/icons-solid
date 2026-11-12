import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdbhrwb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 7l3 3c.64.64 1 1.36 1 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7c0-.64.36-1.36 1-2l6-6a1.414 1.414 0 0 1 2 0zm-6 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0M8 21a4 4 0 1 1 8 0");
}
</style><path class="vdbhrwb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-user"} {...others} />);
}

export default Component;
