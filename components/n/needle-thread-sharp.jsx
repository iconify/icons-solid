import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbudbrb7k {
  d: path("M3.25 20.75L16.66 7.34a2.25 1.25-45 1 1 3.18-3.18a2.25 1.25-45 1 1-3.18 3.18");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbfew8b1e {
  d: path("M18.25 5.75C14 2 7 3.5 7.75 8.25S5.5 15 3 13.75");
}
</style><g class="x2cwu0gfd"><path class="nbudbrb7k"/><path class="xbfew8b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:needle-thread-sharp"} {...others} />);
}

export default Component;
