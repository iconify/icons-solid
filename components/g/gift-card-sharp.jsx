import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsg8mwb7y {
  d: path("M8.75 11c-1-2.25-3-2.25-3 0s2 2.25 3 0Zm0 0c1-2.25 3-2.25 3 0s-2 2.25-3 0Z");
}

.mrog_7b0y {
  d: path("M2.75 5.75h18.5v12.5H2.75zm0 5.25h3m6 0h9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mrog_7b0y"/><path class="jsg8mwb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gift-card-sharp"} {...others} />);
}

export default Component;
