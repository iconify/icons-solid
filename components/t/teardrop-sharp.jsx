import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i68fcw4ww {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20 4l-2.14 10.41a7 7 0 1 1-8.27-8.27Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x3tv9rxpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 13h.01");
}
</style><g class="ux2u0rbkq"><path class="i68fcw4ww"/><path class="x3tv9rxpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:teardrop-sharp"} {...others} />);
}

export default Component;
