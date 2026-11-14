import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ib3gs6bzn {
  d: path("M6 2.5V16a2 2 0 0 0 2 2h13.5");
}

.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu5ir404e {
  d: path("M2.5 6H16a2 2 0 0 1 2 2v13.5");
}
</style><g class="ulnmmdpxh"><path class="ib3gs6bzn"/><path class="vu5ir404e"/><path class="ocmla0jdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crop-square"} {...others} />);
}

export default Component;
