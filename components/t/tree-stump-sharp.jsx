import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mrklgdc8d {
  d: path("M5.75 8.5a6.25 2.5 0 0 0 12.5 0M9.5 14v4.5m8.75-5l2.25-.375l.75-1.875");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yhimfg_0y {
  d: path("M5.75 8.5a6.25 2.5 0 0 1 12.5 0v11.321l2.5 1.429H3.25l2.5-1.429V17.75Z");
}
</style><g class="x2cwu0gfd"><path class="yhimfg_0y"/><path class="mrklgdc8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tree-stump-sharp"} {...others} />);
}

export default Component;
