import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inf4ddb2s {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4_8dnm3c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25V21m-2-8.75h4m-2 5.25H8.5M12 21H8.5");
}

.o6a500beq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="inf4ddb2s"/><path class="o6a500beq"/><path class="m4_8dnm3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skeleton-key-sharp"} {...others} />);
}

export default Component;
