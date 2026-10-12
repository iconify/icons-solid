import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dwro6gb8m {
  d: path("m9.17 14.16l3.89-3.89a1.6 1.6 0 1 1 2.58-.81a1.6 1.6 0 1 1-.81 2.58l-3.89 3.89a1.6 1.6 0 1 1-2.58.81a1.6 1.6 0 1 1 .81-2.58Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znnymjgam {
  d: path("M3.75 5h16.5v16.25H3.75zM9.5 2.75h5");
}
</style><g class="x2cwu0gfd"><path class="znnymjgam"/><path class="dwro6gb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:x-ray-film-sharp"} {...others} />);
}

export default Component;
