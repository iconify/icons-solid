import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ranet6bpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9H2.5v6H7m3-6h4m-4 6h4m3-6h4.5v6H17M8.5 6.5zA1.5 1.5 0 0 1 10 8v8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 7 16V8a1.5 1.5 0 0 1 1.5-1.5m7 0zA1.5 1.5 0 0 1 17 8v8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 16V8a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ranet6bpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pipeline-symbol"} {...others} />);
}

export default Component;
