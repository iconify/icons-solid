import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h083lj9da {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3a9 9 0 1 1-9 9a4.53 4.53 0 0 0 5-4a4.53 4.53 0 0 0 4-5M3 7h.01M4 3h.01M8 3h.01M10 17h.01M15 15h.01M11 12h.01M16 10h.01");
}
</style><path class="h083lj9da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cookie"} {...others} />);
}

export default Component;
