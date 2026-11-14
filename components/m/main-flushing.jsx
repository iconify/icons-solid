import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7j-lkcok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 20.5V8a3 3 0 0 1 6 0v12.5M4.5 8h8m-9 12.5h10m-2-9H14v3h-2.5M14 13q5 0 6.5 4m.25 3.25h.01");
}
</style><path class="e7j-lkcok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:main-flushing"} {...others} />);
}

export default Component;
