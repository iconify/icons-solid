import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9ir5cbdc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6.5h.01m2.49-3.25h.01");
}

.uuo-bub5m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.16 20.52l2.18-9.79l.16-.73h5l.16.73l2.18 9.79l.16.73H7zm3.34-5.02h3M2.75 21.25h18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="uuo-bub5m"/><path class="m9ir5cbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hydrothermal-vent-sharp"} {...others} />);
}

export default Component;
