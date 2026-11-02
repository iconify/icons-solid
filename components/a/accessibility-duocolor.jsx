import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.y6svolbyf {
  stroke-opacity: 0.4;
  d: path("M11 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 4h10m-5 0v2l-3 3m3-3l3 3");
}
</style><g class="nrj6p8qat"><path class="y6svolbyf"/><path class="q_a5zcbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:accessibility-duocolor"} {...others} />);
}

export default Component;
