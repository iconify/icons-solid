import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h22e_ykqe {
  d: path("M6.5 20.5v-4c0-4 8-4 8-8v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zzqsrdify {
  d: path("m11 7l3.5-3.5L18 7");
}
</style><g class="ulnmmdpxh"><path class="h22e_ykqe"/><path class="zzqsrdify"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lane-arrow-merge-right"} {...others} />);
}

export default Component;
