import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mtmm_2bga {
  d: path("M4.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.t_4plbt9w {
  d: path("M11.75 11.75L21 21M11.743 3.257a6 6 0 0 1-8.486 8.486");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t_4plbt9w"/><path class="mtmm_2bga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-ball-retriever"} {...others} />);
}

export default Component;
