import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqwf6bcnc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5h18.5v5H2.75z");
}

.sbg9aqh9t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6.75H14v10.5H7.5zM10.25 12h5.5");
}

.th7iub40n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.75 12h.01m2.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="lqwf6bcnc"/><path class="sbg9aqh9t"/><path class="th7iub40n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:belt-sharp"} {...others} />);
}

export default Component;
