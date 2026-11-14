import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhyv67r2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L3 6l-.5 6.5H6v9h12v-9h3.5L21 6l-5.5-3m-7 0l4 11.5m3-11.5l-5 5.75M6 14.5h12m-5.5 0l-2 4m2-4l2 4");
}
</style><path class="rhyv67r2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:karate-gi"} {...others} />);
}

export default Component;
