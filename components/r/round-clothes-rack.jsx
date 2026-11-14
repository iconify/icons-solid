import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s_7oxgbpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v18m-1 0H9m-5.5-18h18M8 3.5v1.75M5.75 6.5l1.5-1.25h1.5l1.5 1.25l-.5 2l-.5-.25V13h-2.5V8.25l-.5.25Zm7.75-3v1.75M11.25 6.5l1.5-1.25h1.5l1.5 1.25l-.5 2l-.5-.25V13h-2.5V8.25l-.5.25Zm7.75-3v1.75M16.75 6.5l1.5-1.25h1.5l1.5 1.25l-.5 2l-.5-.25V13h-2.5V8.25l-.5.25Z");
}
</style><path class="s_7oxgbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:round-clothes-rack"} {...others} />);
}

export default Component;
