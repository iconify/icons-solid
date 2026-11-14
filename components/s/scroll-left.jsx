import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ooxdrom3k {
  d: path("M11.75 9.25L9 12l2.75 2.75");
}

.tj0s_i07j {
  d: path("M6 16V5.5A2.5 2.5 0 0 1 8.5 3h11a2.5 2.5 0 0 1 0 5h-2v10.5A2.5 2.5 0 0 1 15 21H4.5a2.5 2.5 0 0 1 0-5Zm8.5-4H9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tj0s_i07j"/><path class="ooxdrom3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:scroll-left"} {...others} />);
}

export default Component;
