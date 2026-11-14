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

.us9j8i2-b {
  d: path("M8.5 13.25L12 15l3.5-1.75M12 15v3.75");
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.yys0--uvc {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-7.5 3l3.5 1.75V17L12 18.75L8.5 17v-3.75Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="yys0--uvc"/><path class="us9j8i2-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:file-box"} {...others} />);
}

export default Component;
