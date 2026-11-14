import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2zdfzbqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 21.5L7.25 10c.25-2 1.5-3.5 3.5-3.75l4.5.75c2 .5 4 2 4.25 3.5s-1 2.25-2.25 2l-4.5-.75l-1.5 9.75m-1-15.25L9.5 3m3.25 3.5l-.25-3.25M9.5 3h.01m2.99.25h.01m1.74 6h.01");
}
</style><path class="m2zdfzbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:giraffe-head"} {...others} />);
}

export default Component;
