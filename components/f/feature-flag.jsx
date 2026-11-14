import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvmbwrgzr {
  d: path("M5.5 2.5h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z");
}

.sw_u05b5s {
  d: path("M13.25 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.25 7.75v6.25m0-6.25H21l-1.5 2l1.5 2h-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hvmbwrgzr"/><path class="sw_u05b5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:feature-flag"} {...others} />);
}

export default Component;
