import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah5fvxkch {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.33 10.75h2m-2 3.5h2m9.34-3.5h2m-2 3.5h2m-2 3.5h2m-7.67-7h2");
}

.oy8giw1pz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v17.5H2.75zm0 4.25h18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="oy8giw1pz"/><path class="ah5fvxkch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kanban-board-sharp"} {...others} />);
}

export default Component;
