import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jpckf5azx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17c0 4.5-3.5 8-8.5 8s-8.5-3.5-8.5-8ZM8 18l-1.5 3.5M16 18l1.5 3.5m-11-15v-2m5.5 2v-3m5.5 3v-2");
}
</style><path class="jpckf5azx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bbq-grill"} {...others} />);
}

export default Component;
