import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nua0gybws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5L3 6.5L4.5 11L7 10v10.5h10V10l2.5 1L21 6.5l-5.5-3C15 5.25 13.75 6 12 6s-3-.75-3.5-2.5M7 15.5h10");
}
</style><path class="nua0gybws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:event-merch"} {...others} />);
}

export default Component;
