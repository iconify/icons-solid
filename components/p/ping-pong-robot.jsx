import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbxurgb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h11v9h-11ZM8 5V2.5M8 14v6m-3.5 0h7m4.75-10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-10.5 0h.01m4.49 0h.01");
}
</style><path class="bbxurgb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ping-pong-robot"} {...others} />);
}

export default Component;
