import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6ax1lbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v2.5h-19Zm1-2c0-4.25 2.75-6.5 6.25-6.5S16 10.75 16 15Zm6.25-8.25h.01M17.5 11H21v4h-3.5Z");
}
</style><path class="l6ax1lbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:patient-meal"} {...others} />);
}

export default Component;
