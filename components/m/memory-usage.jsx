import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dc14kuehf {
  d: path("M5.5 8.25H10v4.5H5.5Zm8.5 0h4.5v4.5H14ZM5.5 15.5v3m3.5-3v3m6-3v3m3.5-3v3");
}

.t1bejqw1l {
  d: path("M2.5 5.5h19v10h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t1bejqw1l"/><path class="dc14kuehf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:memory-usage"} {...others} />);
}

export default Component;
