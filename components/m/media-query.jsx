import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr8b_wbob {
  d: path("M2 3.5h20V17H2ZM12 17v3.5m-4 0h8M6.5 10.25h11");
}

.gb26_k93p {
  d: path("m8.5 8.25l-2 2l2 2m7-4l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dr8b_wbob"/><path class="gb26_k93p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:media-query"} {...others} />);
}

export default Component;
