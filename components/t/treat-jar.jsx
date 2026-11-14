import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ojwn5sbpc {
  d: path("M9.75 13.25h4.5a1.25 1.25 0 1 1 2 0q-.75.75 0 1.5a1.25 1.25 0 1 1-2 0h-4.5a1.25 1.25 0 1 1-2 0q.75-.75 0-1.5a1.25 1.25 0 1 1 2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2dujjblb {
  d: path("M3.5 2.75h17v4h-17Zm1 4V18.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V6.75");
}
</style><g class="ulnmmdpxh"><path class="z2dujjblb"/><path class="ojwn5sbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:treat-jar"} {...others} />);
}

export default Component;
