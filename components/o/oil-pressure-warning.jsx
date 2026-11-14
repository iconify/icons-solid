import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g96sx_bme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.5h5.75L20.5 7l-5 7.25c-.25.5-.75.75-1.25.75H8a1 1 0 0 1-1-1Zm0 1H4.5a1 1 0 0 0-1 1v.5c0 .5.25.75.75 1L7 14m3-4.5v-2m-1.5 0h3m8.5 4s-1.25 1.75-1.25 2.75a1.25 1.25 0 0 0 2.5 0c0-1-1.25-2.75-1.25-2.75Z");
}
</style><path class="g96sx_bme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:oil-pressure-warning"} {...others} />);
}

export default Component;
