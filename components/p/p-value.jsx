import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bklxxxpba {
  fill: currentColor;
  d: path("M15 10c1.75 4 3.25 9.5 6.5 9.5H15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xspv39b6q {
  d: path("M2.5 19.5c5 0 6-13 9.5-13s4.5 13 9.5 13");
}
</style><g class="ulnmmdpxh"><path class="xspv39b6q"/><path class="bklxxxpba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:p-value"} {...others} />);
}

export default Component;
