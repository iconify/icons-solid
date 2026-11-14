import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ael1bgdwl {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01M14 15V9");
}

.ouy71-h4b {
  d: path("M11.75 11L14 8.75L16.25 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ael1bgdwl"/><path class="ouy71-h4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:price-change-up"} {...others} />);
}

export default Component;
