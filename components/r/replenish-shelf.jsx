import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk29427vj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19M15.2 13H2.5v-2.5h19V13h-.7M2.5 18l5-5m-1-2.5V6l1-1V3H9v2l1 1v4.5m2.5-6h6v6h-6Zm5.5 10v7M14.5 18h7");
}
</style><path class="vk29427vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:replenish-shelf"} {...others} />);
}

export default Component;
