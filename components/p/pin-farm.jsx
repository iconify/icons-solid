import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3gkrvb0b {
  d: path("M8 12.5h8V21H8Zm0 0l8 8.5m0-8.5L8 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyg8a9-7o {
  d: path("M3.5 21V10.5l3-5L12 3l5.5 2.5l3 5V21Z");
}
</style><g class="ulnmmdpxh"><path class="yyg8a9-7o"/><path class="i3gkrvb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-farm"} {...others} />);
}

export default Component;
