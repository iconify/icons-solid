import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.up1r5vdye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 13.5l-2-1.25C18.9 11.4 18 11 17 11c-1.25 0-2.25.75-3 1.75c-1.5-3.25-4.5-6-8.5-7C6.5 9 7.75 11.5 9.75 13.5C7.5 14 5 14.25 2.5 14L4 16.5c2.5 1.25 5 1.75 7.5 1.75c4 0 6.75-1.75 8-3.75Z");
}
</style><path class="up1r5vdye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bird-flying"} {...others} />);
}

export default Component;
