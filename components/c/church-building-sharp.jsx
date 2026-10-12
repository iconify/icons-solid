import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq1y8tbux {
  d: path("M3.25 20.65V10l.37-.47l2.26-2.81l.37-.47l.37.47l2.26 2.81l.37.47v11.25h-6zm6 0V12.5l.46-.38l4.83-3.99l.46-.38l.46.38l4.83 3.99l.46.38v8.75H9.25zm-3-14.4v-3.5M5 4h2.5m-1.25 8v2.5M15 11.75v1.5");
}

.k2o55zbcc {
  d: path("M13.25 21.25v-4.5h3.5v4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fq1y8tbux"/><path class="k2o55zbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:church-building-sharp"} {...others} />);
}

export default Component;
