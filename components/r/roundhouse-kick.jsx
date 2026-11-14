import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fbsqvpbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 4.75l2 4.75l-1 8m1-8l11-4.5m-17 3.5L12 9m3.5 11.75a9.5 9.5 0 0 0 3.5-6.5");
}
</style><path class="fbsqvpbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:roundhouse-kick"} {...others} />);
}

export default Component;
