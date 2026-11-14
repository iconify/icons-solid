import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gf70svpqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 20.5h6L14 14h-4ZM6 13c-2.5 0-3-3.5-.5-4.5c0-3 3.5-4 5-2C12 4 16 5 16 7.5c3-.5 4.5 3 2 4.5c-.5 2-4 2-6 1.5c-2 .5-5 .5-6-.5Z");
}
</style><path class="gf70svpqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:broccoli"} {...others} />);
}

export default Component;
