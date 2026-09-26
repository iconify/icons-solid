import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjpys8beh {
  d: path("M8.5 19.5L12 12.5L15.5 19.5L12 18.6945L8.5 19.5Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j0mppdb_k {
  d: path("M19 21L21 21L21 3L3 3L3 21L5 21");
}
</style><g class="gp_8x1bzb"><path class="j0mppdb_k"/><path class="cjpys8beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-navigation-sharp"} {...others} />);
}

export default Component;
