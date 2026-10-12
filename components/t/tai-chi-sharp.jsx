import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kh53oc2ob {
  d: path("M11 7.5v5m0 0L7 16v5.25m4-8.75l4.5 2.75l1.75 6M11 8.5l4 2l3.5-1.25M11 8.5l-3.75.75L5.5 7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv0jcqhnw {
  cx: 11px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="zv0jcqhnw"/><path class="kh53oc2ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tai-chi-sharp"} {...others} />);
}

export default Component;
