import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgzof0bky {
  d: path("M2.75 3.25h18.5v12.5H2.75z");
}

.eqetao-iy {
  d: path("m11.1 7.27l2.8 1.71l.85.52l-.85.52l-2.8 1.71l-.85.52v-5.5zM2.75 19.75h8m3.25 0h7.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cgzof0bky"/><path class="eqetao-iy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:video-lesson-sharp"} {...others} />);
}

export default Component;
