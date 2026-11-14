import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ukft6mbhm {
  d: path("M3.5 3h17v12h-17ZM2 18h20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_i0w8ihh {
  d: path("M10 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 13c0-1.75 1.5-2.75 3.5-2.75s3.5 1 3.5 2.75m-4.25-6.75h.01");
}
</style><g class="ulnmmdpxh"><path class="ukft6mbhm"/><path class="y_i0w8ihh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laptop-doctor"} {...others} />);
}

export default Component;
