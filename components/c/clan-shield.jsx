import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpu49jkem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15v4c0 4-3.5 6.75-7.5 8.5C8 19.75 4.5 17 4.5 13ZM8 9l-.5-5.5L10 6l2-3l2 3l2.5-2.5L16 9");
}
</style><path class="cpu49jkem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:clan-shield"} {...others} />);
}

export default Component;
