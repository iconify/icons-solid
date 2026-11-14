import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ygjv7012l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h3l5-3.5v11L6 12H3Zm2 4v8.5m8.75-12.75a3.5 3.5 0 0 1 0 4.5M16 5.75a6.5 6.5 0 0 1 0 8.5M18.25 4a9.5 9.5 0 0 1 0 12");
}
</style><path class="ygjv7012l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:audio-beacon"} {...others} />);
}

export default Component;
