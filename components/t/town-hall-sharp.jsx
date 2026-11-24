import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikzjr--iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 8v7h4v6H3v-6h4V8m3 13v-4h4v4M7 8a5 5 0 0 1 10 0m0 0A5 5 0 0 1 7 8m5-2v2h2");
}
</style><path class="ikzjr--iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:town-hall-sharp"} {...others} />);
}

export default Component;
