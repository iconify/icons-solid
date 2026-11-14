import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh37rtvuq {
  d: path("M9 14.25q3 3 6 0M9.5 11h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3c-j02jo {
  d: path("M3 7.5h18V21H3Zm6-5l3 5m3-5l-3 5");
}
</style><g class="ulnmmdpxh"><path class="z3c-j02jo"/><path class="dh37rtvuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kids-tv"} {...others} />);
}

export default Component;
