import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmlvn2bln {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19M12 12V6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd8s8yb-r {
  d: path("M9.75 8.75L12 6.5l2.25 2.25");
}
</style><g class="ulnmmdpxh"><path class="jmlvn2bln"/><path class="xd8s8yb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laptop-upload"} {...others} />);
}

export default Component;
