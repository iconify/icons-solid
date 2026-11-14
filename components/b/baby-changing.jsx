import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v84dyfbux {
  d: path("M2.5 4H5v17.5H2.5ZM5 13.5h16.5V16H5Zm0 7L15.5 16m-9-6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.x0576_bnk {
  d: path("M8.25 7.5c0-1 1.25-1.25 1.5-.5m3 6.5v-2c0-1.25.75-2 2-2H18c1.25 0 2 .75 2 2v2");
}
</style><g class="ulnmmdpxh"><path class="v84dyfbux"/><path class="x0576_bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baby-changing"} {...others} />);
}

export default Component;
