import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4doy9bxq {
  d: path("M2.5 13h19v4.5h-19Z");
}

.o3z4te61y {
  d: path("M11 3.5V10M8.75 7.75L11 10l2.25-2.25m2.25-1.5l1.5 1.5l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxttrebrc {
  fill: currentColor;
  d: path("M7.5 13h7v4.5h-7Z");
}
</style><g class="ulnmmdpxh"><path class="d4doy9bxq"/><path class="yxttrebrc"/><path class="o3z4te61y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:test-results-normal"} {...others} />);
}

export default Component;
