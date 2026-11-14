import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7-onz7fp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12.5V8a5.5 5.5 0 0 1 11 0v4.5H14V8a2 2 0 0 0-4 0v4.5Zm2.5 3h7.5a3 3 0 0 1 0 6h-9a1.5 1.5 0 0 1 0-3H15M6.5 10H10m4 0h3.5");
}
</style><path class="o7-onz7fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:magnet-pickup"} {...others} />);
}

export default Component;
