import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkxr0kb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11a8 8 0 0 1 16 0m-8 0l4-4.5m-4 4.5h.01M18 14.5c.25 2.25 1.25 3.25 3.5 3.5c-2.25.25-3.25 1.25-3.5 3.5c-.25-2.25-1.25-3.25-3.5-3.5c2.25-.25 3.25-1.25 3.5-3.5");
}
</style><path class="bkxr0kb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lead-scoring-ai"} {...others} />);
}

export default Component;
