import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npcnlcbcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5V8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.5m-17 6V17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.5m-18-3H9m6 0h6.5M9 11h6v3H9Z");
}
</style><path class="npcnlcbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fiber-splice-tray"} {...others} />);
}

export default Component;
