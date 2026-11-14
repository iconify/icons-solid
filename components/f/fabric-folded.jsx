import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o2z1ru1ci {
  d: path("M9 3v12h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2f53cb5z {
  d: path("M3 3h6l12 12v4.5q-1.5 2-3 0t-3 0t-3 0t-3 0t-3 0t-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="y2f53cb5z"/><path class="o2z1ru1ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fabric-folded"} {...others} />);
}

export default Component;
