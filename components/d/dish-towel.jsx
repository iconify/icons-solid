import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zbffr5bfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6V4.5a1.75 1.75 0 0 1 3.5 0V6M5 6h14v13q-1.75 2.5-3.5 0T12 19t-3.5 0T5 19Zm0 4h14");
}
</style><path class="zbffr5bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dish-towel"} {...others} />);
}

export default Component;
