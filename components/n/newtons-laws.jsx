import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sabgh9bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.625 7h5.25A2.625 2.625 0 0 1 21.5 9.625v5.25a2.625 2.625 0 0 1-2.625 2.625h-5.25A2.625 2.625 0 0 1 11 14.875v-5.25A2.625 2.625 0 0 1 13.625 7M2.5 17.5h19m-19-6h5.75M5.75 9l2.5 2.5l-2.5 2.5");
}
</style><path class="sabgh9bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:newtons-laws"} {...others} />);
}

export default Component;
