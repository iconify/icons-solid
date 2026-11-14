import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i4jetoxqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h4A1.75 1.75 0 0 1 10 6.25A1.75 1.75 0 0 1 8.25 8h-4A1.75 1.75 0 0 1 2.5 6.25A1.75 1.75 0 0 1 4.25 4.5m11.5 0h4a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 8h-4A1.75 1.75 0 0 1 14 6.25a1.75 1.75 0 0 1 1.75-1.75M8.5 8l3.5 4l3.5-4M12 12v8.5");
}
</style><path class="i4jetoxqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:antenna-dipole"} {...others} />);
}

export default Component;
