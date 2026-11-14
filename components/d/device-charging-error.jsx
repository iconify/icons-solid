import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dil1r7baf {
  d: path("M11.5 6L8 12h4l-2.5 5m8.5-2.5V18m0 3h.01");
}

.l07xlrb8y {
  d: path("M15.2 21H4.5V2.5H16v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l07xlrb8y"/><path class="dil1r7baf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:device-charging-error"} {...others} />);
}

export default Component;
