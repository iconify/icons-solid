import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im_1b8b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h13m-13 5h13m-13 5H10m6.263-.663l1.052.622a1.5 1.5 0 0 1 0 2.582l-1.052.622A1.5 1.5 0 0 1 14 17.871v-1.242a1.5 1.5 0 0 1 2.263-1.292");
}
</style><path class="im_1b8b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:playlist"} {...others} />);
}

export default Component;
