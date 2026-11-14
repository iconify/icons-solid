import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.st47xmb9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 3.5h.25A2.625 2.625 0 0 1 10.5 6.125v11.75A2.625 2.625 0 0 1 7.875 20.5h-.25A2.625 2.625 0 0 1 5 17.875V6.125A2.625 2.625 0 0 1 7.625 3.5m8.5 3.5h.25A2.625 2.625 0 0 1 19 9.625v4.75A2.625 2.625 0 0 1 16.375 17h-.25a2.625 2.625 0 0 1-2.625-2.625v-4.75A2.625 2.625 0 0 1 16.125 7M2.5 12H5m5.5 0h3m5.5 0h2.5");
}
</style><path class="st47xmb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:align-center-horizontal"} {...others} />);
}

export default Component;
