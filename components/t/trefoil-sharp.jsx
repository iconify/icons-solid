import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afk3glbhf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.75h.01");
}

.jvq4z_pej {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.1 10.5a4.5 4.5 0 1 1 7.8 0a4.5 4.5 0 1 1-3.9 6.75a4.5 4.5 0 1 1-3.9-6.75Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="jvq4z_pej"/><path class="afk3glbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trefoil-sharp"} {...others} />);
}

export default Component;
