import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enbtdobjz {
  cx: 6.5px;
  cy: 12px;
  r: 1.25px;
}

.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.nnvh2smpt {
  d: path("M3.75 4.5h16.5M3.75 8.25h10m-10 7.5h16.5M3.75 19.5h10");
}

.wj-8yfbln {
  cx: 17.5px;
  cy: 12px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nnvh2smpt"/><circle class="enbtdobjz"/><circle class="lf940mbnz"/><circle class="wj-8yfbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:section-break-sharp"} {...others} />);
}

export default Component;
