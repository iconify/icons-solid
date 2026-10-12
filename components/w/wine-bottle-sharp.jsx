import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aau6z2y0a {
  d: path("M10.25 2.75h3.5v5.5l1.5 1.5l1.5 1.5v10h-9.5v-10l1.5-1.5l1.5-1.5v-1Z");
}

.ffqzan0by {
  d: path("M9.5 13.25h5v4h-5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aau6z2y0a"/><path class="ffqzan0by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wine-bottle-sharp"} {...others} />);
}

export default Component;
