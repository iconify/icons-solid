import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.st6i9wblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19a7 2 0 1 0 14 0a7 2 0 1 0-14 0m6-16v16m2.091-15.104l1.692.725a1.5 1.5 0 0 1 0 2.758l-1.692.725A1.5 1.5 0 0 1 11 6.725v-1.45a1.5 1.5 0 0 1 2.091-1.379");
}
</style><path class="st6i9wblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mini-golf"} {...others} />);
}

export default Component;
