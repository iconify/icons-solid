import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdxqc5m1s {
  d: path("m13.743 8.136l2.121 2.121L5.257 20.864l-2.121-2.121ZM11 5V3.25l1-.75M14 5V3.25l1-.75M17 5V3.25l1-.75M20 5V3.25l1-.75");
}

.q156s3bqa {
  d: path("M9 5h12v3.5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q156s3bqa"/><path class="fdxqc5m1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grooming"} {...others} />);
}

export default Component;
