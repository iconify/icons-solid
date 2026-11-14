import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3xjkzobe {
  d: path("m8.026 8.068l1.638-1.147l6.31 9.011l-1.638 1.147Z");
}

.dsvgj-blv {
  d: path("M9.5 2.5v4c-2.5.25-3 3.5-.5 3.75h6c2.5-.25 2-3.5-.5-3.75v-4m-5 19v-4c-2.5-.25-3-3.5-.5-3.75h6c2.5.25 2 3.5-.5 3.75v4");
}

.l9hkiabnw {
  d: path("m14.336 6.921l1.638 1.147l-6.31 9.011l-1.638-1.147Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dsvgj-blv"/><path class="l9hkiabnw"/><path class="d3xjkzobe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ligament"} {...others} />);
}

export default Component;
