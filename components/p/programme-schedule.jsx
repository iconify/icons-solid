import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-tmbkblw {
  d: path("M3 4.5h18V21H3Zm5-2V6m8-3.5V6M3 9.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0gg2detc {
  d: path("M13.5 13.5H18v4h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="p-tmbkblw"/><path class="v0gg2detc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:programme-schedule"} {...others} />);
}

export default Component;
