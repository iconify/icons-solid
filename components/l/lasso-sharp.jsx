import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_b39sbik {
  d: path("M5.54 13.58a8.5 6.25 0 1 1 3.37 2.08m-3.37-2.08l.833 2.667L4.54 18.08");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4wjsdyuw {
  cx: 4.25px;
  cy: 19.5px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="g_b39sbik"/><circle class="y4wjsdyuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lasso-sharp"} {...others} />);
}

export default Component;
