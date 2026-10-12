import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrfnoyaqa {
  d: path("m12 10.25l3.25 1.25V14c0 2.1-1.35 3.65-3.25 4.5c-1.9-.85-3.25-2.4-3.25-4.5v-2.5Z");
}

.m-m3cc3aa {
  d: path("m4.27 8.52l6.71-4.79L12 3l1.02.73l6.71 4.79l1.02.73v12H3.25v-12z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m-m3cc3aa"/><path class="jrfnoyaqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:police-station-sharp"} {...others} />);
}

export default Component;
