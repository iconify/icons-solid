import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlja7xebr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M7 18a5 5 0 0 1 10 0M12 2.5V9M9.5 5L12 2.5L14.5 5M4 10.5l1.25 1.25M20 10.5l-1.25 1.25M8 21.25h8");
}
</style><path class="hlja7xebr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wake-up"} {...others} />);
}

export default Component;
