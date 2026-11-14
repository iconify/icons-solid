import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldn_vs67t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5L5.75 15C5.25 11.5 7 8.5 10 8.5c1.5 0 2.5 1 3 2l2.25 1l-2.25 1c-.5 3-2.5 5-5 5c-.75 0-1.5-.25-2-.5Zm7-6h.01M17.5 9a3.5 3.5 0 0 1 0 5m2-7a6.5 6.5 0 0 1 0 9");
}
</style><path class="ldn_vs67t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:animal-sounds"} {...others} />);
}

export default Component;
