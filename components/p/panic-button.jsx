import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr5emhbkc {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfb4n2bpj {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM5 5L3.75 3.75M19 5l1.25-1.25M5 19l-1.25 1.25M19 19l1.25 1.25");
}
</style><g class="ulnmmdpxh"><path class="dr5emhbkc"/><path class="yfb4n2bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:panic-button"} {...others} />);
}

export default Component;
