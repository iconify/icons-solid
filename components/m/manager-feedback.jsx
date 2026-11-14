import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjjgjfl_f {
  d: path("M4 5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 5v9.5a2.5 2.5 0 0 1-2.5 2.5h-3L12 20.5L9.5 17h-3A2.5 2.5 0 0 1 4 14.5Z");
}

.l59rakbpm {
  d: path("M10.75 5.25h2.5l-.5 2h-1.5Zm.5 2h1.5l1 5.25L12 14.25l-1.75-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjjgjfl_f"/><path class="l59rakbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:manager-feedback"} {...others} />);
}

export default Component;
