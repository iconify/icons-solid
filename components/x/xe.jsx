import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c50zezbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.322 11.903a15.5 15.5 0 0 1 9.683-3.398C36.563 8.505 43.5 15.442 43.5 24s-6.937 15.495-15.495 15.495c-3.52 0-6.935-1.198-9.683-3.398m13.73-7.282c-.892 1.783-2.972 2.972-5.052 2.972c-3.27 0-5.944-2.675-5.944-5.943V21.98c0-3.268 2.675-5.943 5.944-5.943c3.268 0 5.943 2.675 5.943 5.943v2.08H21.056m-4.67 7.727L4.5 15.74m11.887 0L4.5 31.787");
}
</style><path class="c50zezbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xe"} {...others} />);
}

export default Component;
