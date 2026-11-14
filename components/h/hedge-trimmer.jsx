import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x5xq5lbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10.75h2a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5m-1 0v-2.5a1.5 1.5 0 0 1 3 0v2.5m2.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5l1.5 1.5h1.5a1 1 0 0 1 0 2H19l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5");
}
</style><path class="x5xq5lbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hedge-trimmer"} {...others} />);
}

export default Component;
