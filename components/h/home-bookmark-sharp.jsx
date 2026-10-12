import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9fs_2b8x {
  d: path("M9.75 20.25V15.5a2.25 2.25 0 0 1 4.5 0v4.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe6rk8n-s {
  d: path("M3.75 9.75L12 3.25l8.25 6.5v10.5H3.75v-2Z");
}
</style><g class="x2cwu0gfd"><path class="xe6rk8n-s"/><path class="m9fs_2b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:home-bookmark-sharp"} {...others} />);
}

export default Component;
