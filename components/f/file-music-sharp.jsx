import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.sg01bab1k {
  cx: 11px;
  cy: 16.75px;
  r: 1.75px;
}

.uniul2b_z {
  d: path("M13.75 2.75v5.5h5.5m-6.5 8.5V10.5l2.5 1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="uniul2b_z"/><circle class="sg01bab1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:file-music-sharp"} {...others} />);
}

export default Component;
