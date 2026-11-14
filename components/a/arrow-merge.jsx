import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik9xqux_v {
  d: path("M12 3v8l-6 6v4m6-10l6 6v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yil3u-b5j {
  d: path("M8.5 6.5L12 3l3.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="ik9xqux_v"/><path class="yil3u-b5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrow-merge"} {...others} />);
}

export default Component;
