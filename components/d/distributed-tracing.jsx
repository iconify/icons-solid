import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fw095ebce {
  d: path("M5 7v12h8.5M5 12h3.5");
}

.qetwbhp9c {
  d: path("M3 3h10v4H3Zm5.5 7H17v4H8.5Zm5 7H21v4h-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qetwbhp9c"/><path class="fw095ebce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:distributed-tracing"} {...others} />);
}

export default Component;
