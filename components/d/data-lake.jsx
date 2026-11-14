import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akee6bkib {
  d: path("M7.5 8c1-1 2-1 3 0s2 1 3 0s2-1 3 0m-12 4c1-1 2-1 3 0s2 1 3 0s2-1 3 0s2 1 3 0s2-1 3 0m-12 4c1-1 2-1 3 0s2 1 3 0s2-1 3 0");
}

.bqddp2b0w {
  d: path("M2.5 12a9.5 8 0 1 0 19 0a9.5 8 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bqddp2b0w"/><path class="akee6bkib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-lake"} {...others} />);
}

export default Component;
