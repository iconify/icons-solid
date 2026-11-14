import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgxwlvpee {
  d: path("m13.5 18l5-2.5A1.5 1.5 0 0 1 20 18l-6.5 3.5h-11");
}

.eeljtfbto {
  d: path("M10 7.5a2 4.75 0 1 0 4 0a2 4.75 0 1 0-4 0ZM2.5 16H6l3-1h4a1.5 1.5 0 0 1 0 3h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfutiql7e {
  d: path("M7.25 7.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm0 0h9.5");
}
</style><g class="ulnmmdpxh"><path class="yfutiql7e"/><path class="eeljtfbto"/><path class="dgxwlvpee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:foreign-aid"} {...others} />);
}

export default Component;
