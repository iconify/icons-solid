import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ehzabs01i {
  d: path("M10.5 4a8 8 0 0 0 0 16Zm3 0a8 8 0 0 1 0 16Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z907b6bvk {
  d: path("M10.5 17a5 5 0 0 1 0-10m3 0a5 5 0 0 1 0 10");
}
</style><g class="hntgybcog"><path class="ehzabs01i"/><path class="z907b6bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:commission-split"} {...others} />);
}

export default Component;
