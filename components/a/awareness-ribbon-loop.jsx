import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gc6cgvbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 21.5L14.5 13c1.25-2 1.5-3.75 1.5-5.5C16 5 14.25 3 12 3S8 5 8 7.5c0 1.75.25 3.5 1.5 5.5l5.75 8.5");
}
</style><path class="gc6cgvbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:awareness-ribbon-loop"} {...others} />);
}

export default Component;
