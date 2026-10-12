import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.tq5fvchzp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 8l2-2l2 2m-4 8l2 2l2-2m-6-6l-2 2l2 2m8-4l2 2l-2 2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="tq5fvchzp"/><path class="to8m3ibcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dance-pad-sharp"} {...others} />);
}

export default Component;
