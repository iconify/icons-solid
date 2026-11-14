import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhhti4bet {
  d: path("M4.5 9.75a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm7.5 7.5v4.25");
}

.e_4ldpbjh {
  fill: currentColor;
  d: path("M9.5 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dhhti4bet"/><path class="e_4ldpbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:marker-circle"} {...others} />);
}

export default Component;
