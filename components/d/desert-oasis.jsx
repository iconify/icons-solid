import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiy0qhc5c {
  d: path("M4.5 16q7.5-5 15 0M4 19.5q2.5-1.5 5 0t5 0t5 0");
}

.hzvv7l7zq {
  d: path("M11.5 7q2 4 1 6.5m-1-6.5C9 4.5 6 4.5 3.5 6.5m8 .5c1.5-3 5.5-3.5 9-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hzvv7l7zq"/><path class="aiy0qhc5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:desert-oasis"} {...others} />);
}

export default Component;
