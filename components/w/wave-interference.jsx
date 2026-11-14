import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0vgxjylc {
  d: path("M3 12q3-10.125 6 0t6 0t6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqupxoqvf {
  d: path("M3 17c1.25 0 2.25-2.5 3-5q3-10.125 6 0t6 0c.75-2.5 1.75-5 3-5");
}
</style><g class="ulnmmdpxh"><path class="e0vgxjylc"/><path class="xqupxoqvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wave-interference"} {...others} />);
}

export default Component;
