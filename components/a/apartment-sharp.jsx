import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-_5zua6t {
  d: path("M10.5 21.25v-3.5h3v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7dub9b0d {
  d: path("M3.75 2.75h16.5v18.5H3.75zM7 6.5h2m2 0h2m2 0h2M7 10h2m2 0h2m2 0h2M7 13.5h2m2 0h2m2 0h2");
}
</style><g class="x2cwu0gfd"><path class="x7dub9b0d"/><path class="s-_5zua6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:apartment-sharp"} {...others} />);
}

export default Component;
