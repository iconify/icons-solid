import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayacvntxn {
  d: path("M10 9q5-.5 8 3q-5 1-8-3ZM5.5 9H10m-4.5 6.5H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcn7cex9m {
  d: path("M5.5 2.5H10v19H5.5ZM10 9q3-4.5 8.5-4.5Q15.5 9 10 9Z");
}
</style><g class="ulnmmdpxh"><path class="wcn7cex9m"/><path class="ayacvntxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bamboo"} {...others} />);
}

export default Component;
