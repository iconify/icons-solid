import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pn8qonbys {
  d: path("m14.5 2.5l-6 9.5h4L10 20.5l7-11h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0j4yjb5j {
  d: path("M8.3 16.5H2.5v-13h8.1m6.5 0h4.4v3.2m0 .9v8.9h-5.6m-7.9 4h1m4.3 0H16");
}
</style><g class="ulnmmdpxh"><path class="z0j4yjb5j"/><path class="pn8qonbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:seizure-warning"} {...others} />);
}

export default Component;
