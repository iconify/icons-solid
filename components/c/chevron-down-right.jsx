import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef0mrcblt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.25h12c.9 0 1.35 1.1.7 1.7l-6 5.6a1 1 0 0 1-1.4 0l-6-5.6c-.65-.6-.2-1.7.7-1.7");
}
</style><path class="ef0mrcblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chevron-down-right"} {...others} />);
}

export default Component;
