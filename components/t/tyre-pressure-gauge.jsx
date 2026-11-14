import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k010ogfyx {
  d: path("M4 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uv2i4jb4g {
  d: path("M11 16.5V18a2 2 0 0 0 2 2h3m0-1.5h4.5v3H16Zm-5-9l2.75-2.75");
}
</style><g class="ulnmmdpxh"><path class="k010ogfyx"/><path class="uv2i4jb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tyre-pressure-gauge"} {...others} />);
}

export default Component;
