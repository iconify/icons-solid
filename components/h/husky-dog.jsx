import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l066_12vs {
  d: path("M9.5 6.5L12 12l2.5-5.5m-6.5 6h.01m7.99 0h.01M12 17h.01");
}

.p9dj0yi2a {
  d: path("m3.5 10.5l1-8l5 4h5l5-4l1 8c0 6-4 11-8.5 11s-8.5-5-8.5-11");
}
</style><g class="hntgybcog"><path class="p9dj0yi2a"/><path class="l066_12vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:husky-dog"} {...others} />);
}

export default Component;
