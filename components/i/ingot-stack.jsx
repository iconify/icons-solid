import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avhmhyr9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.232 15.487l.909-2.5A1.5 1.5 0 0 1 5.551 12h2.148a1.5 1.5 0 0 1 1.41.987l.909 2.5a1.5 1.5 0 0 1-1.41 2.013H4.642a1.5 1.5 0 0 1-1.41-2.013m10.75 0l.909-2.5a1.5 1.5 0 0 1 1.41-.987h2.148a1.5 1.5 0 0 1 1.41.987l.909 2.5a1.5 1.5 0 0 1-1.41 2.013h-3.966a1.5 1.5 0 0 1-1.41-2.013m-6-5.5l.909-2.5a1.5 1.5 0 0 1 1.41-.987h3.398a1.5 1.5 0 0 1 1.41.987l.909 2.5A1.5 1.5 0 0 1 14.608 12H9.392a1.5 1.5 0 0 1-1.41-2.013");
}
</style><path class="avhmhyr9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ingot-stack"} {...others} />);
}

export default Component;
