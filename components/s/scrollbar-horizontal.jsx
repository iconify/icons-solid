import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ji82kcb9n {
  d: path("M7 9.75L4.75 12L7 14.25m10-4.5L19.25 12L17 14.25");
}

.uf9cmdbsc {
  d: path("M2 7h20v10H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.weeoombgx {
  fill: currentColor;
  d: path("M9.75 10.75h4.5v2.5h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="uf9cmdbsc"/><path class="ji82kcb9n"/><path class="weeoombgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:scrollbar-horizontal"} {...others} />);
}

export default Component;
