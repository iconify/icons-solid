import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5bmgibrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L10 3.5m4.239 14.96L7 3.5M2.5 19h11.6m-7.6 0l2-4.5l2 4.5m8-5l-.75 7.5M21.5 14l-.75 7.5m-3.75-5h5m-5.25 3.25h5");
}
</style><path class="t5bmgibrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:campsite-number"} {...others} />);
}

export default Component;
