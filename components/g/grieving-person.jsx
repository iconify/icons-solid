import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxqvyw3gp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-2.5 13c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5M18.5 8c-1.5 2-1.75 4 0 4s1.5-2 0-4Z");
}
</style><path class="nxqvyw3gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grieving-person"} {...others} />);
}

export default Component;
