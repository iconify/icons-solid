import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w42vjbcdr {
  d: path("m12 3.5l9 16H3Z");
}

.wvbqt9eix {
  d: path("M8.5 13.5h7v6h-7Z");
}
</style><g class="ulnmmdpxh"><path class="w42vjbcdr"/><path class="wvbqt9eix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:onigiri"} {...others} />);
}

export default Component;
