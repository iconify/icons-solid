import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rie4z-j_m {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7-2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.u3v3lgbld {
  d: path("M10 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxxcdij5x {
  d: path("M2 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="xxxcdij5x"/><path class="u3v3lgbld"/><path class="rie4z-j_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:join-right"} {...others} />);
}

export default Component;
