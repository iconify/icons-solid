import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.he-6-nbhf {
  d: path("M14 3v6l6 6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nq6698b_y {
  d: path("M4 3v6l6 6v6");
}

.u0v2ngbwe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ucckh9bjz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="u0v2ngbwe"/><path class="ucckh9bjz"/><path class="nq6698b_y"/><path class="he-6-nbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:river-duotone-thin"} {...others} />);
}

export default Component;
