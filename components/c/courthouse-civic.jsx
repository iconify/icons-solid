import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5rpn5bhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5Zm9 3v9m-3 0h6m-9.5-8h13M3.5 17l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Zm13 0l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Z");
}
</style><path class="f5rpn5bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:courthouse-civic"} {...others} />);
}

export default Component;
