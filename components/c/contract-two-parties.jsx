import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dd194vuta {
  d: path("M2.5 8.5h4l4-2.5h3L18 9h3.5m-19 5.5h3l5.25 4.5a1.5 1.5 0 0 0 2.25-.5l5.5-4h3m-16.75-6v6M19.25 9v5.5");
}

.i-vukufnv {
  d: path("M10.5 6L7.75 9.75A1.5 1.5 0 0 0 10 11l2-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dd194vuta"/><path class="i-vukufnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contract-two-parties"} {...others} />);
}

export default Component;
