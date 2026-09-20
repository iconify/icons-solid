import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-ycm7dex {
  d: path("m3 9 6 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tw1khnbtv {
  d: path("M3 21h5v-5h5v-5h5V6h3");
}
</style><g class="s0phu2bbs"><path class="d-ycm7dex"/><path class="tw1khnbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:quantize-4bit-outline-bold"} {...others} />);
}

export default Component;
