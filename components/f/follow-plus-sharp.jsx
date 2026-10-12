import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqrgq66ey {
  cx: 10.25px;
  cy: 8.25px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-fd6pbmc {
  cx: 10.25px;
  cy: 10.25px;
  r: 7.5px;
}

.zd6qxvbry {
  d: path("M6.25 14.5a4 4 0 0 1 8 0m4.5 2.25v4m-2-2h4");
}
</style><g class="x2cwu0gfd"><circle class="y-fd6pbmc"/><circle class="lqrgq66ey"/><path class="zd6qxvbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:follow-plus-sharp"} {...others} />);
}

export default Component;
