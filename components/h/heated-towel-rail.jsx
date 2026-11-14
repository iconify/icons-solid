import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrbpjzkua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5v-16m14 0v16M5 9h14M5 17h14M8 9v5h8V9m-8 8v4.5h8V17M9.5 6.5q-1.25-1 0-2t0-2m5 4q-1.25-1 0-2t0-2");
}
</style><path class="nrbpjzkua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heated-towel-rail"} {...others} />);
}

export default Component;
