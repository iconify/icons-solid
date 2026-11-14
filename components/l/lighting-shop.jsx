import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agtqf7biq {
  d: path("M10.5 18.75V17a3.5 3.5 0 1 1 3 0v1.75Z");
}

.d7yh-jbxe {
  d: path("m3 7l1.5-4.5h15L21 7Zm1.5 0v14.5h15V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d7yh-jbxe"/><path class="agtqf7biq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lighting-shop"} {...others} />);
}

export default Component;
