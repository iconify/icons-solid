import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktn_ozgnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 3l4.5 8.5L16.5 3H19c0 4 .5 6 1 7v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9c.5-1 1-3 1-7ZM4 15.5h16");
}
</style><path class="ktn_ozgnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:taekwondo-chest-protector"} {...others} />);
}

export default Component;
