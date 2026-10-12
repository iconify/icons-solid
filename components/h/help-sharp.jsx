import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0008obhs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 16.75h.01");
}

.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t7cqdxbqa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.6 9.4a2.5 2.5 0 1 1 3.4 2.35l-1 .417v1.583");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="t7cqdxbqa"/><path class="b0008obhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:help-sharp"} {...others} />);
}

export default Component;
