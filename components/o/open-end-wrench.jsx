import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vakaiwb3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.889 2.454l1.768 1.768l-2.475 2.475l2.121 2.121l2.475-2.475l1.768 1.768L17.657 12l-2.475-.354l-2.828-2.828L12 6.343ZM12.53 8.995l2.475 2.475l-3.535 3.535l-2.475-2.475ZM2.454 15.889l1.768 1.768l2.475-2.475l2.121 2.121l-2.475 2.475l1.768 1.768L12 17.657l-.354-2.475l-2.828-2.828L6.343 12Z");
}
</style><path class="vakaiwb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:open-end-wrench"} {...others} />);
}

export default Component;
