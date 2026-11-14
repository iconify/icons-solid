import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.of-4j3b7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-3h6v-3h6v-3h7v9ZM17.116 4.227l3.096 3.096a1.5 1.5 0 0 1 0 2.122l-1.767 1.767a1.5 1.5 0 0 1-2.122 0l-3.096-3.096a1.5 1.5 0 0 1-.439-1.061V5.288a1.5 1.5 0 0 1 1.5-1.5h1.767a1.5 1.5 0 0 1 1.061.439M15.97 6.97h.01");
}
</style><path class="of-4j3b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:discount-tiered"} {...others} />);
}

export default Component;
