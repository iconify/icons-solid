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

.w_3_fcchr {
  d: path("M12 2.5L20 7v10l-8 4.5L4 17V7Z");
}

.warp9sian {
  d: path("m4 7l4 2.25L12 7l4 2.25L20 7M8 9.25v5l4 2.25l4-2.25v-5m-4 7.25v5M12 7v5l-4 2.25M12 12l4 2.25");
}
</style><g class="ulnmmdpxh"><path class="w_3_fcchr"/><path class="warp9sian"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cad-model"} {...others} />);
}

export default Component;
