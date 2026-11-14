import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6x-lthtz {
  d: path("M11.5 19.5H3v-17h13v4.2M6.5 7h6m-6 4h3");
}

.r2ccl4bhy {
  d: path("m16.75 12.25l1.029 2.584l2.775.18l-2.14 1.777l.687 2.695L16.75 18l-2.351 1.486l.687-2.695l-2.14-1.777l2.775-.18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i6x-lthtz"/><path class="r2ccl4bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:good-first-issue"} {...others} />);
}

export default Component;
