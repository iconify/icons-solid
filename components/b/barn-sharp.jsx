import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pyvv5qbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5 3l3 4v11H4V10l3-4zM3 21h18M9 21v-5h6v5m-5-11a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="pyvv5qbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:barn-sharp"} {...others} />);
}

export default Component;
