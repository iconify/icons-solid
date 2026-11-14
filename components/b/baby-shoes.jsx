import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhwz8_ine {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h5.5v13h-6c-1.25 0-2-.75-2-2c0-2 1-3.5 2.5-4Zm14 0h-5.5v13h6c1.25 0 2-.75 2-2c0-2-1-3.5-2.5-4ZM5 9h5.5m3 0H19");
}
</style><path class="yhwz8_ine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baby-shoes"} {...others} />);
}

export default Component;
