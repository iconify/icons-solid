import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4igwmbjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14h17.5l-1.6 5.75l-.38 1.472l-1.52.028H6.75l-1.52-.028l-.38-1.472ZM8.7 7.5h6.6a1.75 1.75 0 1 1 2.75 1a1.75 1.75 0 1 1-2.75 1H8.7a1.75 1.75 0 1 1-2.75-1a1.75 1.75 0 1 1 2.75-1Z");
}
</style><path class="m4igwmbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pet-bowl-clock-sharp"} {...others} />);
}

export default Component;
