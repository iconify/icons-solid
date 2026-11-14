import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cn_1flbsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.049 13.22l11.169-6.825a1.5 1.5 0 0 1 2.282 1.28V14.5A1.5 1.5 0 0 1 19 16H7.831a1.5 1.5 0 0 1-.782-2.78M2.5 19h19");
}
</style><path class="cn_1flbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ramp-portable"} {...others} />);
}

export default Component;
