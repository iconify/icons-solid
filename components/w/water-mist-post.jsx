import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q75a2rbmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20.5h11m-7.5 0v-12m4 12v-12m-4-4h4a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-5.5-1h.01m-1.01 3h.01m.99 3h.01m14.99-6h.01m.99 3h.01m-1.01 3h.01");
}
</style><path class="q75a2rbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-mist-post"} {...others} />);
}

export default Component;
