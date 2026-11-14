import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5671682r {
  d: path("M11.544 20.5H3.5v-10L12 3.25l8.5 7.25v1.356");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp-am0bed {
  d: path("M18.75 14.25a3.75 3.75 0 1 0 2.25 5a3 3 0 0 1-2.25-5Z");
}
</style><g class="ulnmmdpxh"><path class="h5671682r"/><path class="wp-am0bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:do-not-disturb-home"} {...others} />);
}

export default Component;
