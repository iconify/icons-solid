import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-s-2wskg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3h6.5v3h-6.5zm0 6h18.5v10H2.75zM7.4 9v10M12 9v10m4.6-10v10");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w_n6acb1d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.1 14h.01m4.59 0h.01m4.59 0h.01m4.59 0h.01");
}
</style><g class="ux2u0rbkq"><path class="s-s-2wskg"/><path class="w_n6acb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pill-box-sharp"} {...others} />);
}

export default Component;
