import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w68wbccql {
  d: path("M9.5 10.5h5A2 2 0 1 1 17 12a2 2 0 1 1-2.5 1.5h-5A2 2 0 1 1 7 12a2 2 0 1 1 2.5-1.5Z");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="w68wbccql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:element-calcium"} {...others} />);
}

export default Component;
