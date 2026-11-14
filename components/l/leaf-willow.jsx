import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-xv40bvx {
  d: path("M4 20q7-7.5 13-13.5");
}

.ogisx2h0z {
  d: path("M4 20c2-9 7.5-15 16-16.5c-2.5 7-8 13-16 16.5Zm0 0l-1.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ogisx2h0z"/><path class="c-xv40bvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leaf-willow"} {...others} />);
}

export default Component;
