import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.diqre3b0k {
  d: path("M3 17.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0Zm-1 4a2.5 2.5 0 0 1 5 0m3.5-4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0Zm-1 4a2.5 2.5 0 0 1 5 0m3.5-4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0Zm-1 4a2.5 2.5 0 0 1 5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmsqe4bvr {
  d: path("M10.5 2.5h3v2h2v3h-2v2h-3v-2h-2v-3h2Zm1.5 7V16m-7.5 0v-3h15v3");
}
</style><g class="ulnmmdpxh"><path class="zmsqe4bvr"/><path class="diqre3b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:health-network"} {...others} />);
}

export default Component;
