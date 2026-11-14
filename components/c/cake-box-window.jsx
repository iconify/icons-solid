import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clm01dmtd {
  d: path("M3 12q1.5 2.5 3 0q1.5 2.5 3 0q1.5 2.5 3 0q1.5 2.5 3 0q1.5 2.5 3 0q1.5 2.5 3 0M3 16.25h18");
}

.qaq28qbfw {
  d: path("m3 9l16.5-5L21 9v10.5H3Zm0 0h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qaq28qbfw"/><path class="clm01dmtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cake-box-window"} {...others} />);
}

export default Component;
