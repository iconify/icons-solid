import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0v1-dbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.5c-1-7 3.5-13 8.5-13s9.5 6 8.5 13c-2.5-4.5-5.5-6-8.5-6s-6 1.5-8.5 6Zm8.5-13v7m4.5 1.25l2-4.5m-11 4.5l-2-4.5");
}
</style><path class="f0v1-dbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-croissant"} {...others} />);
}

export default Component;
