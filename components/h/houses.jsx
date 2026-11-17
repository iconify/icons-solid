import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lawno2fmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21h8m-8 0H3v-6.717a2 2 0 0 1 .683-1.506l3-2.625a2 2 0 0 1 2.634 0l3 2.625A2 2 0 0 1 13 14.283zm0-14h.01M17 7h.01M17 11h.01M17 15h.01M9 9.875V3h10a2 2 0 0 1 2 2v16");
}
</style><path class="lawno2fmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:houses"} {...others} />);
}

export default Component;
