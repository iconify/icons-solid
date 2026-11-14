import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efmmlxfca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5h11.5v3.75h-6.25A5.5 5.5 0 1 1 9 8.5M9 14h.01M12 2.5v2.75M6.25 3.5L7.5 5.75M17.75 3.5L16.5 5.75");
}
</style><path class="efmmlxfca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:foul"} {...others} />);
}

export default Component;
