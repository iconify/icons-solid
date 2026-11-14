import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnvgkd5be {
  d: path("M5.5 12h7v3.5h-7Zm0 6.5H9m6.5-13a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrcvc85bf {
  d: path("M2.5 9h13v12.5h-13Z");
}
</style><g class="ulnmmdpxh"><path class="vrcvc85bf"/><path class="gnvgkd5be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smart-meter-hub"} {...others} />);
}

export default Component;
