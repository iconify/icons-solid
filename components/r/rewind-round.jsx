import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6fitebpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17.971 7.285l-5 3c-1.295.777-1.295 2.653 0 3.43l5 3c1.333.8 3.029-.16 3.029-1.715V9c0-1.555-1.696-2.515-3.029-1.715m-9 0l-5 3c-1.295.777-1.295 2.653 0 3.43l5 3c1.333.8 3.029-.16 3.029-1.715V9c0-1.555-1.696-2.515-3.029-1.715");
}
</style><path class="w6fitebpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rewind-round"} {...others} />);
}

export default Component;
