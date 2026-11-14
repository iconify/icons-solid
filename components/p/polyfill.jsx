import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tsf5xeu4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.868 14.475L14.475 3.868a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828L9.525 20.132a2 2 0 0 1-2.828 0l-2.829-2.829a2 2 0 0 1 0-2.828Zm3.536-2.829l4.95 4.95m-.708-9.192l4.95 4.95M12 12h.01");
}
</style><path class="tsf5xeu4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:polyfill"} {...others} />);
}

export default Component;
