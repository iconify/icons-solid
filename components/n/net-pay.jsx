import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aff637bdl {
  d: path("M9 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 3v7m-3-3l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxuzurb0o {
  d: path("M11.6 18H2.5V5h19v10.1");
}
</style><g class="ulnmmdpxh"><path class="wxuzurb0o"/><path class="aff637bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:net-pay"} {...others} />);
}

export default Component;
