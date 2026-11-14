import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahtra4brk {
  fill: currentColor;
  d: path("M13.5 5.5h3.25v13H13.5Z");
}

.dtg1k2boz {
  d: path("M4.5 2.5h15v19h-15Zm6.25 0v19");
}

.iqd8hj7pe {
  d: path("M4.5 9h6.25M4.5 15h6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtg1k2boz"/><path class="ahtra4brk"/><path class="iqd8hj7pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:credit-column"} {...others} />);
}

export default Component;
