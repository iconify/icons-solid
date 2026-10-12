import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5sfk2b5q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5V2.75h2.5M2.75 7.5h18.5v10H2.75zm2.75 5H9m-1.75-1.75v3.5m3.5-.25h2.5");
}

.rxo43kb9y {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 13h.01m2.99-2h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="l5sfk2b5q"/><path class="rxo43kb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:controller-retro-sharp"} {...others} />);
}

export default Component;
