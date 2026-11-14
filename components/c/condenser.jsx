import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ycf-tgbjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 6.5h12.75A2.625 2.625 0 0 1 21 9.125v8.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-8.75A2.625 2.625 0 0 1 5.625 6.5m.875 0v-3H3m14.5 3v-3H21m-13.5 6v8m4.5-8v8m4.5-8v8");
}
</style><path class="ycf-tgbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:condenser"} {...others} />);
}

export default Component;
