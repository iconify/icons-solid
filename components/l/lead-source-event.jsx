import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gi3ay1b2o {
  d: path("M11.1 19.5H2.5v-15h16v6.2M7 2.5v4m7-4v4m-11.5 3h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x56lvubad {
  d: path("M13.5 13.5H18l4 4l-4.5 4.5l-4-4Z");
}
</style><g class="ulnmmdpxh"><path class="gi3ay1b2o"/><path class="x56lvubad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lead-source-event"} {...others} />);
}

export default Component;
