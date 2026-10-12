import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds_zyub3e {
  d: path("M2.75 10.5h12v4h-12ZM9.5 5.25h1.75l1-1.25l1.5 2.5l1-1.25h1.75");
}

.l83ljlbbe {
  d: path("M8 2.75h13.25v18.5H6v-3.5h11.75V7.5H8a2.375 2.375 0 0 1 0-4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l83ljlbbe"/><path class="ds_zyub3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:oximeter-sharp"} {...others} />);
}

export default Component;
