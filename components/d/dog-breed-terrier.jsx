import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ykh_4ibpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h8l.25-5.25l1.25-2l1 2h1L21.5 7v2.5l-3.5.75l-.5 4.75h-13v-4L3 5.75L5.25 10ZM6 15v5.5M9 15v5.5m4.5-5.5v5.5m3-5.5v5.5m1.25-13h.01");
}
</style><path class="ykh_4ibpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dog-breed-terrier"} {...others} />);
}

export default Component;
