import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mg3b9h2da {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5C4.5 17 5 13.5 4 10h6.5c-1 3.5-.5 7 1.5 11.5Zm9.5 0c2-3.5 2.5-6.5 1.5-9.5h6c-1 3-.5 6 1.5 9.5ZM4.5 7H11a1.5 1.5 0 0 0-.5-2.75a3.5 3.5 0 0 0-5 .5A1.25 1.25 0 0 0 4.5 7Z");
}
</style><path class="mg3b9h2da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-power-plant"} {...others} />);
}

export default Component;
