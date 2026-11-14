import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qo4o2cb0t {
  d: path("M7.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h4M14 12v2");
}

.ukh-macob {
  d: path("M5 5h14v14H5Zm4-2.5V5m3-2.5V5m3-2.5V5M9 19v2.5m3-2.5v2.5m3-2.5v2.5M2.5 9H5m-2.5 6H5m14-6h2.5M19 15h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ukh-macob"/><path class="qo4o2cb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:security-hsm"} {...others} />);
}

export default Component;
