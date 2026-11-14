import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jm--n2byi {
  d: path("M2.5 16.5q2.375-1.25 4.75 0t4.75 0t4.75 0t4.75 0M6 20.5q2-1.25 4 0t4 0t4 0");
}

.kyqno2b8k {
  d: path("M6 5.5a6 3 0 1 0 12 0a6 3 0 1 0-12 0Zm6 3v2m0 0c-4 0-7 2-8 6m8-6c-2 1.25-3.5 3-3.5 6m3.5-6c2 1.25 3.5 3 3.5 6m-3.5-6c4 0 7 2 8 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kyqno2b8k"/><path class="jm--n2byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mangrove-swamp"} {...others} />);
}

export default Component;
