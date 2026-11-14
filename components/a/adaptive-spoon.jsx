import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wsv554u9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7a3 4.5 0 1 0 6 0a3 4.5 0 1 0-6 0Zm-.25 3.25l-1.75 3.5m-1.659-1.523l3.182 3.182l-6.364 6.364l-3.182-3.182Z");
}
</style><path class="wsv554u9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adaptive-spoon"} {...others} />);
}

export default Component;
