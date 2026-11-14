import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9hi5l-6x {
  d: path("M7.25 8.25h5v4.5h-5ZM18.75 14C19 16 21 17 21 18.5a3 3 0 0 1-6 0c0-1.5 1-2.25 1.5-3c.75.75 1.25 0 2.25-1.5Z");
}

.gu-qtlbgb {
  d: path("M13 21.5H4.5v-16H15v7.2M7.25 5.5v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gu-qtlbgb"/><path class="b9hi5l-6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:methane-detector"} {...others} />);
}

export default Component;
