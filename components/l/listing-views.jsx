import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9tmqhbal {
  d: path("m5.5 10.5l4-4l4 4v4.086M11.914 16.5H5.5v-6M16 9h3m-3 3h2m-3.75 6c2-3 5.5-3 7.5 0c-2 3-5.5 3-7.5 0ZM18 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vh2miebrm {
  d: path("M11.9 19.5H2.5v-15h19v9.4");
}
</style><g class="ulnmmdpxh"><path class="vh2miebrm"/><path class="h9tmqhbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:listing-views"} {...others} />);
}

export default Component;
