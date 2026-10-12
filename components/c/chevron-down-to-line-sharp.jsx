import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcvv_rb-r {
  d: path("M5.25 11.75L12 18.5l6.75-6.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmm3srbki {
  d: path("M5.25 5.5L12 12.25l6.75-6.75");
}
</style><g class="x2cwu0gfd"><path class="xmm3srbki"/><path class="gcvv_rb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chevron-down-to-line-sharp"} {...others} />);
}

export default Component;
