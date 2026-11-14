import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i8qvdwhim {
  d: path("M3 10h18v11.5H3Z");
}

.pu22_cc-y {
  d: path("M21 13.25h-3.5a2 2 0 0 0 0 4H21M5.5 10V4A1.5 1.5 0 0 1 7 2.5h10.5V10M8 2.5V10");
}

.qbynkn2mn {
  d: path("M12 2.5V7l1.25-1l1.25 1V2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i8qvdwhim"/><path class="pu22_cc-y"/><path class="qbynkn2mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:learning-stipend"} {...others} />);
}

export default Component;
