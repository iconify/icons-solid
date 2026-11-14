import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6knjw82h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L13 6l-2.5 5.5L13 17l-1 4.5M13 6c2-2.5 6-2.5 7.5.5C18 8.75 15 8.5 13 6m-2.5 5.5C8.5 9 5 9 3.5 12c2.5 2.25 5 2 7-.5M13 17c2-2.5 6-2.5 7.5.5c-2.5 2.25-5.5 2-7.5-.5");
}
</style><path class="i6knjw82h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:vine-leaves"} {...others} />);
}

export default Component;
