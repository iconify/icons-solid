import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh3ei7byo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7h9a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 5h.01m3.99 0H17");
}
</style><path class="bh3ei7byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:live-badge"} {...others} />);
}

export default Component;
