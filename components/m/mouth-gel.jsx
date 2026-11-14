import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkhfzwqim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c1.75-3 3.25-3.75 4.75-2.75c1.5-1 3-.25 4.75 2.75c-2 3.5-7.5 3.5-9.5 0Zm0 0H12m3.5-3h4L21 20.5h-7Zm.5-3.25h3V9h-3Zm1.5-3h.01");
}
</style><path class="qkhfzwqim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mouth-gel"} {...others} />);
}

export default Component;
