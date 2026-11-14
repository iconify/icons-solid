import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jb3403bsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.5a1.75 1.75 0 0 1 0-3.5h16.5a1.75 1.75 0 0 1 0 3.5M7.5 3v15m9-15v15m-11 0h13v3.5h-13ZM12 9.5V15");
}
</style><path class="jb3403bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:column-corinthian"} {...others} />);
}

export default Component;
