import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boamuxbog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.5L13 12m-1.1-1.1l5.85-5.85c1.25-1.25 2.6-1.85 3.2-1.6c.25.6-.35 1.95-1.6 3.2L14.1 13.1Z");
}
</style><path class="boamuxbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scalpel"} {...others} />);
}

export default Component;
