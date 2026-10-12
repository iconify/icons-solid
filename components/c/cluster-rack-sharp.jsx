import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_vmkab6a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h4.5v16.5h-4.5zm7 0h4.5v16.5h-4.5zm7 0h4.5v16.5h-4.5zm-14 5.5h4.5m-4.5 5h4.5m2.5-5h4.5m-4.5 5h4.5m2.5-5h4.5m-4.5 5h4.5");
}

.kgg-r098j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 17.25h.01m6.99 0h.01m6.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="a_vmkab6a"/><path class="kgg-r098j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cluster-rack-sharp"} {...others} />);
}

export default Component;
