import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6f2uyclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v3c2 .9 3.25 2.4 3.25 4.5v9a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-9c0-2.1 1.25-3.6 3.25-4.5Zm-6.25 1l16.5 16.5");
}
</style><path class="h6f2uyclo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:plastic-free"} {...others} />);
}

export default Component;
