import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mojjo118z {
  d: path("M2.5 12h19v9.5h-19Z");
}

.nafpyzurc {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 3.5v5m-6.5-4l2 4m11-4l-2 4m-14-1.25l2 2m17-2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mojjo118z"/><path class="nafpyzurc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cash-detector"} {...others} />);
}

export default Component;
