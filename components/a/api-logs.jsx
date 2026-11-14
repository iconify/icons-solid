import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohy-abb5u {
  d: path("m14.5 15l2.5 2.5l-2.5 2.5m4 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn3avwwos {
  d: path("M11.1 19.5H3v-17h14.5v11.6M6 7h1.5m2.75 0h4.5M6 11h1.5m2.75 0h3.25M6 15h4.6");
}
</style><g class="ulnmmdpxh"><path class="zn3avwwos"/><path class="ohy-abb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:api-logs"} {...others} />);
}

export default Component;
