import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq4flqb5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5A2.25 2.25 0 0 1 7 4.25a2.5 2.5 0 0 1 4.5 0a2 2 0 0 1 2 3.25Zm.5 0v14h14.5v-2.25c0-1.75-.75-2.75-2.5-3.5L13 14V7.5m-8 3h8");
}
</style><path class="mq4flqb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beer-boot"} {...others} />);
}

export default Component;
