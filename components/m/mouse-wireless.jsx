import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwp8gfbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 8h4a3.25 3.25 0 0 1 3.25 3.25v7a3.25 3.25 0 0 1-3.25 3.25h-4A3.25 3.25 0 0 1 4 18.25v-7A3.25 3.25 0 0 1 7.25 8Zm2 3v2M13 5a4 4 0 0 1 4 4m-4-7a7 7 0 0 1 7 7");
}
</style><path class="iwp8gfbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mouse-wireless"} {...others} />);
}

export default Component;
