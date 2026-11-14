import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu2d5jb4w {
  d: path("M6.5 20.5h11a4.5 4.5 0 0 0 0-9a6.5 6.5 0 0 0-13 .5a4.5 4.5 0 0 0 2 8.5Z");
}

.qhjnlwbsv {
  d: path("M8.5 13a2.25 2.25 0 1 0 0 4m2-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6.25-.25a1.25 1.25 0 0 1 2.5 0c0 1-2.5 1.25-2.5 2.25h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gu2d5jb4w"/><path class="qhjnlwbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:co2"} {...others} />);
}

export default Component;
