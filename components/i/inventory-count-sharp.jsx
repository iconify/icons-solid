import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3y0mhpjx {
  d: path("M4.25 3.75h15.5v17.5H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd-vp3ztb {
  d: path("M9 3.75v3h6v-3M9 10v7.5m3-7.5v7.5m3-7.5v7.5m-8-1.75l10-4.5");
}
</style><g class="x2cwu0gfd"><path class="f3y0mhpjx"/><path class="xd-vp3ztb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:inventory-count-sharp"} {...others} />);
}

export default Component;
