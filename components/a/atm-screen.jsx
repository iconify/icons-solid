import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqeru8bce {
  d: path("M7.75 6.25h8.5v6.5h-8.5ZM5.25 8.5h.01m-.01 4h.01m13.49-4h.01m-.01 4h.01m-8.26-3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xaws6te5x {
  d: path("M2.5 3.5h19v14h-19Zm9.5 14v3m-3.5 0h7");
}
</style><g class="ulnmmdpxh"><path class="xaws6te5x"/><path class="aqeru8bce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-screen"} {...others} />);
}

export default Component;
